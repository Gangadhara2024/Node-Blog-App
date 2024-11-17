const mongoose = require("mongoose");
const clc = require("cli-color");

function configDB() {
  mongoose
    .connect(process.env.MONGO_URI, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    })
    .then(() => console.log(clc.yellow("mongoDB connected succesfully")))
    .catch((err) => console.log(err));
}
module.exports = configDB;
