const { Router } = require("express");
const { userModel } = require("../db");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    await userModel.create({
      email,
      password,
      firstName,
      lastName,
    });
  } catch (error) {
    console.log("something wrong");
  }
  res.json({
    mgs: "sign up success",
  });
});
userRouter.post("/signin", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});
userRouter.get("/purchases", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});

module.exports = {
  userRouter,
};
