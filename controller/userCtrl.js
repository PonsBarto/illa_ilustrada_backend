const User = require("../models/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne(email);
  if (!findUser) {
    //create new User
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    //User Already Exists
    res.json({
      msg: "User already Exists",
      success: false,
    });
  }
};

module.exports = { createUser };
