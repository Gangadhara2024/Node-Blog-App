const userModel = require("../Models/userSchema");

function userController(req, res) {
  try {
    userModel
      .create(req.body)
      .then((response) => {
        res.status(201).json({
          message: "user created succesfully",
          data: response,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "something went wrong",
          error: err,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      error: err,
    });
  }
}
module.exports = userController;
