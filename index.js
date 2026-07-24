const express = require("express");
const app = express();

const db = require("./config/db");

const studentRoutes = require("./Routes/studentRoutes");
const empRoutes = require("./Routes/empRoutes");
const authRoutes = require("./Routes/authRoutes");

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/employees", empRoutes);
app.use("/auth", authRoutes);

// Check Database Connection
app.get("/", async (req, res) => {

    try {

        const [rows] = await db.query("SELECT 1 AS message");

        res.json({
            success: true,
            message: "Database Connected Successfully",
            data: rows
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Database Connection Failed",
            error: error.message
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});