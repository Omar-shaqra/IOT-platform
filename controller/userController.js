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

const createProjectUser = async (req, res) => {
  try {
    const { projectId, fullname, email, password, phone } = req.body;
    const userId = req.params.id;
    // Validate project ID
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).send("Project not found");

    // Validate userId is valid
    const user = await User.findById(userId);
    if (!user) return res.status(404).send("User not found");

    // Check if requester is project owner
    if (!project.owner.equals(user._id)) {
      return res.status(403).send("Unauthorized");
    }

    // Add user to user schema
    const newUser = new User({ fullname, email, password, phone });
    await newUser.save();
    console.log(newUser.fullname);

    // Add user to project users
    project.users.push({
      userID: newUser._id,
      userName: fullname,
    });

    await project.save();
    res.json({
      message: "User added to project",
      projectData: project,
      newUserData: newUser,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const deleteProjectUser = async (req, res) => {
  try {
    const { projectId, userId } = req.body;
    const ownerId = req.params.id;
    // Validate project ID
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).send("Project not found");

    // Validate ownerId is valid
    const owner = await User.findById(ownerId);
    if (!owner) return res.status(404).send("User not found");

    // Check if requester is project owner
    if (!project.owner.equals(owner._id)) {
      return res.status(403).send("Unauthorized");
    }

    // Delete user from user schema
    await User.findByIdAndDelete(userId);

    // Delete user from project users

    // Filter out the user from the users array
    project.users = project.users.filter((user) => user.userID != userId);

    // Save the updated project
    await project.save();

    res.status(200).json({ message: "User removed from project", project });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find({});
  res.status(200).json({ results: user.length, data: user });
});

const getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(404).json({ msg: `no user for this id ${id}` });
  }
  res.status(200).json({ data: user });
});

const deleteOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return next(new ApiError(`no user for this id ${id}`, 404));
  }

  res.status(204).send();
});

module.exports = {
  userAuth,
  getuserProfile,
  registerUser,
  UpdateuserProfile,
  user_projects,
  createProjectUser,
  getUsers,
  getUser,
  deleteOne,
  deleteProjectUser,
};
