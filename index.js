const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

app.post("/user/signup", (req, res) => {
  res.json({
    mgs: "sign up page",
  });
});
app.post("/user/signin", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});
app.get("/user/purchases", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});

app.post("/course/purchase", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});

app.get("/courses", (req, res) => {
  res.json({
    mgs: "endpind",
  });
});

app.listen(3030);
