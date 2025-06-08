const { Router } = require("express");
const { userModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { purchaseModel } = require("../db");
const { userMiddleware } = require("../middlewares/user");
const { jwt_user_password } = require("../config");

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
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign({ id: user._id }, jwt_user_password);
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      mgs: "incorrect credentials",
    });
  }
});
userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const purchases = await purchaseModel.find({
    userId,
  });
  const courseData = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });
  res.json({
    mgs: "sign in page",
    purchases,
    courseData,
  });
});

module.exports = {
  userRouter,
};
