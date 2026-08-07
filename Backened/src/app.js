const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const sendEmail = require("./utils/sendEmail");
const progressRoutes = require("./routes/progressRoutes");
const app = express();

app.get("/test-email", async (req, res) => {
    try {
        await sendEmail(
            "anjalidiswar570@gmail.com",
            "Testing Email",
            "<h2>Hello Anjali 👋</h2><p>Email is working successfully.</p>"
        );

        res.send("Email Sent Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Email Failed");
    }
});


const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
  "https://interactive-algorithm-visualizer-lz.vercel.app",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const isAllowedOrigin = allowedOrigins.includes(origin);
    const isVercelPreview =
      /^https:\/\/interactive-algorithm-visualizer(?:-[a-z0-9-]+)?\.vercel\.app$/.test(origin);

    if (isAllowedOrigin || isVercelPreview) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Algorithm Visualizer Backend Running 🚀"
    });
});


module.exports = app;
