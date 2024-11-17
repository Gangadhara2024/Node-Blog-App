const express = require("express");
const app = express();
require("dotenv").config();

const clc = require("cli-color");
const configDB = require("./Configurations/db.config");
const userRouter = require("./Routers/userRouter");

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);

app.listen(PORT, async () => {
  await configDB();
  console.log(clc.yellowBright(`server running on PORT: ${PORT}`));
});
