const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./Routes/studentRoutes");
const empRoutes = require("./Routes/empRoutes");
const authRoutes = require("./Routes/authRoutes")

app.use("/students", studentRoutes);
app.use("/employees", empRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server Running Successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});