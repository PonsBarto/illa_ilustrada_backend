const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //create new User
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    //User Already Exists
    throw new Error("User Already Exists");
  }
});


//login a user
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser && await findUser.isPasswordMatched(password)) {
    res.json({
      _id: findUser?._id,
      fistname:findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Email Or Password");
  }
});

//Get all users

const getallUser= asyncHandler(async(req,res)=>{
  try{
    const getUser= await User.find();
    res.json(getUser);
  }catch(error){
    throw new Error(error);
  }
});

module.exports = { createUser, loginUserCtrl, getallUser };