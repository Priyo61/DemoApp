const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3030);
