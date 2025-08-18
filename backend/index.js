import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
})
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
