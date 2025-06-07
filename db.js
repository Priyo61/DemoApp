const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://priyobrata61:Sorokhaibam61@cluster0.vntxddf.mongodb.net/app"
);
const Schema = mongoose.Schema;

const ObjecctId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjecctId,
});
const purchaseSchema = new Schema({
  userId: ObjecctId,
  courseId: ObjecctId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchseModel = mongoose.model("purchse", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchseModel,
};
