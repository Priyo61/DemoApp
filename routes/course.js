const { Router } = require("express");
const courseRouter = Router();
const { purchseModel } = require("../db");
const { userMiddleware } = require("../middlewares/user");

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const { userId, courseId } = req.body;
  await purchseModel.create({
    userId,
    courseId,
  });
  res.json({
    mgs: "you have successfully bought purchased",
  });
});

courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});
  res.json({
    courses,
    mgs: "Here are all courses",
  });
});

module.exports = {
  courseRouter,
};
