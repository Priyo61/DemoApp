const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

function auth(req, res, next) {}
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3030, () => {
  console.log("server connected");
});

async function main() {
  await mongoose.connect(
    "mongodb+srv://priyobrata61:Sorokhaibam61@cluster0.vntxddf.mongodb.net/app"
  );
  app.listen(3030, () => {
    console.log("server connected");
  });
  console.log("new connected");
}
main();
