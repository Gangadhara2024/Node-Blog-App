const express = require("express");
const userController = require("../Controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", userController);
module.exports = userRouter;
