const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    mgs: "sign up page",
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
