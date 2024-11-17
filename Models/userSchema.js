const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname required"],
    },
    lastName: {
      type: String,
      required: [true, "lastname required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    username: {
      type: String,
      required: true,
    },
    // article: [
    //   {
    //     article_id: Schema.Types.ObjectId,
    //     ref: "article",
    //   },
    // ],
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function next() {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword: async function (plainpassword) {
    return await bcrypt.compare(plainpassword, this.password);
  },
  generateJWTtoken: async function () {},
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
