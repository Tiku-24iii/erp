const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 MongoDB connect
connectDB();

// Routes
const examRoutes = require("./routes/examRoutes");
const resultRoutes = require("./routes/resultRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const authRoutes = require("./routes/authRoutes");

// ✅ NEW (Student Login)
const studentRoutes = require("./routes/studentRoutes");

app.use("/exams", examRoutes);
app.use("/results", resultRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/auth", authRoutes);

// ✅ ADD HERE
app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// ❗ ALWAYS LAST
app.listen(5000, () => {
  console.log("Server running on port 5000");
});