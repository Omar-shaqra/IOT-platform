const User = require("../models_/userModel");
const Project = require("../models_/projectModule");
const asyncHandler = require("express-async-handler");
const generateToken = require("../Utils/generateToken");
const bcrypt = require("bcryptjs");

const userAuth = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  const CorrectPassword = await user.matchPassword(password);

  if (user && CorrectPassword) {
    res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      token: generateToken(user._id),
    });
  } else if (!CorrectPassword) {
    res.status(401);
    throw new Error("Invalid password");
  } else {
    res.status(401);
    throw new Error("Invalid email");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password, phone } = req.body;

  const userexists = await User.findOne({ email });

  if (userexists) {
    res.status(404);
    throw new Error("User already exists");
  }
  const user = await User.create({
    fullname,
    email,
    password,
    phone,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User already exists");
  }
});

const getuserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const UpdateuserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.fullname = req.body.fullname || user.fullname;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const UpdateUser = await user.save();

    res.json({
      _id: UpdateUser._id,
      fullname: UpdateUser.fullname,
      email: UpdateUser.email,
      phone: UpdateUser.phone,
      token: generateToken(UpdateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const user_projects = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    const project = await Project.find({ owner: user._id });
    res.status(200).json(project);
  } else {
    res.status(404);
    throw new Error("No projects yet");
  }
});

const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

module.exports = {
  userAuth,
  getuserProfile,
  registerUser,
  UpdateuserProfile,
  user_projects,
  createUser,
};
