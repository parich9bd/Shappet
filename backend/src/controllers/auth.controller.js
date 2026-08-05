const {
  generateOtp,
  verifyOtp,
} = require("../services/auth.service");

const pool = require("../config/database");

async function sendOtp(req, res, next) {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "شماره موبایل الزامی است",
      });
    }

    const result = await generateOtp(phone);

    res.status(200).json({
      success: true,
      message: "کد تایید ارسال شد",
      phone,
      expiresIn: result.expiresIn,
    });
  } catch (error) {
    next(error);
  }
}

async function verifyOtpCode(req, res, next) {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: "شماره موبایل و کد تایید الزامی هستند",
      });
    }

    const result = await verifyOtp(phone, otp);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "ورود موفق",
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
}

async function getMe(req, res, next) {
  try {
    const result = await pool.query(
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
        WHERE id = $1
      `,
      [req.user.userId],
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "کاربر پیدا نشد",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
}

function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.status(200).json({
    success: true,
    message: "با موفقیت خارج شدید",
  });
}

module.exports = {
  sendOtp,
  verifyOtpCode,
  getMe,
  logout,
};