const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { courseModel } = require("../db");
const { jwt_admin_password } = require("../config");
const { adminMiddleware } = require("../middlewares/admin");
adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    await adminModel.create({
      email,
      password,
      firstName,
      lastName,
    });
  } catch (error) {
    res.json({
      mgs: "something wrong",
    });
  }
  res.json({
    mgs: "admin sign up Success",
  });
});
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email,
    password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      jwt_admin_password
    );
    res.json({
      token: token,
    });
  } else {
    res.json({
      mgs: "wrong credentails",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, price, imageUrl, creatorId } = req.body;

  const course = await courseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId,
  });

  res.json({
    mgs: "course  created",
    courseId: course._id,
  });
});

adminRouter.put("/course", (req, res) => {
  const { title, description, price, imageUrl, creatorId } = req.body;

  res.json({
    mgs: "admin course changed",
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
