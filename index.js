const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./Routes/studentRoutes");
const empRoutes = require("./Routes/empRoutes");

app.use("/students", studentRoutes);
app.use("/employees", empRoutes);

app.get("/", (req, res) => {
    res.send("Server Running Successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});