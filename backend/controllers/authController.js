const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User");

// Signup controller
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // ✅ Check if this is the first user in the database
    const isFirstUser = (await User.countDocuments({})) === 0;
    const role = isFirstUser ? "admin" : "user"; // auto-assign role

    user = new User({ name, email, password, role });
    await user.save();

    res.json({ msg: "User created", role }); // Optional: return role to frontend
  } catch (err) {
    console.error(err);
    
    res.status(500).json({ msg: "Server error" });
  }
};


// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Email not found. Please sign up." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password. Please try again." });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      msg: "Login successful",
      token,
      role: user.role, // ✅ include role
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};



// Forgot Password controller
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  console.log("📨 Forgot Password Requested For:", email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found for email:", email);
      return res.status(400).json({ msg: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    console.log("🔗 Reset URL:", resetUrl);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "🔐 Reset Your Password - Action Required",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 500px; margin: auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0px 4px 12px rgba(0,0,0,0.1);">
          <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
          <p style="font-size: 16px; color: #555;">
            Hi <b>${user.name}</b> 👨‍💻<br><br>
            We received a request to reset your password. If this was you, click the button below to set a new one.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background-color: #007bff; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; display: inline-block;">
              🔑 Reset Password
            </a>
          </div>
          <p style="font-size: 14px; color: #777;">
            This link will expire in <b>10 minutes</b> for your security. If you didn’t request this change, you can safely ignore this email.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">
            © ${new Date().getFullYear()} Built with ❤️ using MERN. All rights reserved.
          </p>
        </div>
      </div>
      `,
    });

    console.log("✅ Reset email sent to:", user.email);

    res.json({ msg: "Password reset link sent to email" });
  } catch (err) {
    console.error("🔥 forgotPassword server error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};



// Reset Password controller
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ msg: "Invalid or expired token" });

    user.password = password; // will be hashed via Mongoose pre-save middleware
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    console.error("ResetPassword error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

