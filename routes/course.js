const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/course/purchase", (req, res) => {
  res.json({
    mgs: "sign in page",
  });
});

courseRouter.get("/course/preview", (req, res) => {
  res.json({
    mgs: "endpind",
  });
});

module.exports = {
  courseRouter,
};
