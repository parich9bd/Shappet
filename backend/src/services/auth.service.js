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

  await pool.query(
    `
      UPDATE otp_codes
      SET used_at = NOW()
      WHERE phone = $1
        AND used_at IS NULL
    `,
    [phone],
  );

  await pool.query(
    `
      INSERT INTO otp_codes
        (phone, code_hash, expires_at)
      VALUES
        ($1, $2, $3)
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
  const result = await pool.query(
    `
      SELECT *
      FROM otp_codes
      WHERE phone = $1
        AND used_at IS NULL
      ORDER BY created_at DESC
      LIMIT 1
    `,
    [phone],
  );

  const otpRecord = result.rows[0];

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
        WHERE id = $1
      `,
      [otpRecord.id],
    );

    throw new Error("کد تایید اشتباه است");
  }

  await pool.query(
    `
      UPDATE otp_codes
      SET used_at = NOW()
      WHERE id = $1
    `,
    [otpRecord.id],
  );

  let userResult = await pool.query(
    `
      SELECT *
      FROM users
      WHERE phone = $1
    `,
    [phone],
  );

  let user = userResult.rows[0];

  if (!user) {
    userResult = await pool.query(
      `
        INSERT INTO users (phone)
        VALUES ($1)
        RETURNING *
      `,
      [phone],
    );

    user = userResult.rows[0];
  }

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