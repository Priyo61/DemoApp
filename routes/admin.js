const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.json({
    mgs: "admin sign up done",
  });
});
adminRouter.post("/signin", (req, res) => {
  res.json({
    mgs: "admin sign in done",
  });
});
adminRouter.post("/course", (req, res) => {
  res.json({
    mgs: "admin sign in done",
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    mgs: "admin change endpoint",
  });
});
adminRouter.delete("/course", (req, res) => {
  res.json({
    mgs: "admin delete endpoint",
  });
});
adminRouter.get("/course/all", (req, res) => {
  res.json({
    mgs: "admin get all endpont",
  });
});

module.exports = {
  adminRouter,
};
