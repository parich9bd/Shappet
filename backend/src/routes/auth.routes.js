const express = require("express");

const {
  sendOtp,
  verifyOtpCode,
  getMe,
  logout,
} = require("../controllers/auth.controller");

const { requireAuth } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/send-otp", sendOtp);

router.post("/verify-otp", verifyOtpCode);

router.get("/me", requireAuth, getMe);

router.post("/logout", logout);

module.exports = router;