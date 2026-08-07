const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/database");

const OTP_EXPIRES_IN_MINUTES = 2;
const MAX_OTP_ATTEMPTS = 5;

async function generateOtp(phone) {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  const codeHash = await bcrypt.hash(otp, 10);

  const expiresAt = new Date(
    Date.now() + OTP_EXPIRES_IN_MINUTES * 60 * 1000,
  );

  // باطل کردن OTPهای قبلی
  await pool.query(
    `
      UPDATE otp_codes
      SET used_at = NOW()
      WHERE phone = ?
        AND used_at IS NULL
    `,
    [phone],
  );

  // ایجاد OTP جدید
  await pool.query(
    `
      INSERT INTO otp_codes (
        phone,
        code_hash,
        expires_at
      )
      VALUES (?, ?, ?)
    `,
    [phone, codeHash, expiresAt],
  );

  // فعلاً SMS نداریم؛ برای development در terminal نمایش می‌دهیم
  console.log(`OTP for ${phone}: ${otp}`);

  return {
    phone,
    expiresIn: OTP_EXPIRES_IN_MINUTES * 60,
  };
}

async function verifyOtp(phone, otp) {
  const [rows] = await pool.query(
    `
      SELECT *
      FROM otp_codes
      WHERE phone = ?
        AND used_at IS NULL
      ORDER BY created_at DESC
      LIMIT 1
    `,
    [phone],
  );

  const otpRecord = rows[0];

  if (!otpRecord) {
    throw new Error("کد تایید پیدا نشد");
  }

  if (new Date() > new Date(otpRecord.expires_at)) {
    throw new Error("کد تایید منقضی شده است");
  }

  if (otpRecord.attempts >= MAX_OTP_ATTEMPTS) {
    throw new Error("تعداد تلاش‌ها بیش از حد مجاز است");
  }

  const isValid = await bcrypt.compare(
    String(otp),
    otpRecord.code_hash,
  );

  if (!isValid) {
    await pool.query(
      `
        UPDATE otp_codes
        SET attempts = attempts + 1
        WHERE id = ?
      `,
      [otpRecord.id],
    );

    throw new Error("کد تایید اشتباه است");
  }

  // OTP مصرف شد
  await pool.query(
    `
      UPDATE otp_codes
      SET used_at = NOW()
      WHERE id = ?
    `,
    [otpRecord.id],
  );

  // پیدا کردن کاربر
  const [userRows] = await pool.query(
    `
      SELECT
        id,
        phone,
        name,
        email,
        city,
        created_at,
        updated_at
      FROM users
      WHERE phone = ?
      LIMIT 1
    `,
    [phone],
  );

  let user = userRows[0];

  // اگر کاربر وجود نداشت، ایجادش کن
  if (!user) {
    const [insertResult] = await pool.query(
      `
        INSERT INTO users (phone)
        VALUES (?)
      `,
      [phone],
    );

    const [newUserRows] = await pool.query(
      `
        SELECT
          id,
          phone,
          name,
          email,
          city,
          created_at,
          updated_at
        FROM users
        WHERE id = ?
        LIMIT 1
      `,
      [insertResult.insertId],
    );

    user = newUserRows[0];
  }

  // ساخت JWT
  const token = jwt.sign(
    {
      userId: user.id,
      phone: user.phone,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return {
    user,
    token,
  };
}

module.exports = {
  generateOtp,
  verifyOtp,
};