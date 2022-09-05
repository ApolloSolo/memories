const { User } = require("../models/index");
const { generateToken } = require("../utils/generateJWT");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// POST /api/user/register
const registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  const foundUsername = await User.findOne({ username });
  const foundUserEmail = await User.findOne({ email });

  if (foundUsername) {
    throw new Error({ username: "Username taken" });
  }

  if (foundUserEmail) {
    throw new Error({ email: "This email is taken" });
  }

  const user = await User.create({ username, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    res.status(404);
    throw new Error("User Not Found");
  }

  // Check to berify supplied password matches hashed password in DB
  const correctPassword = await foundUser.isCorrectPassword(password); //isCorrectPassword - method on userSchema to check password
  if (!correctPassword) {
    res.status(400);
    throw new Error("Incorrect credentials");
  }

  res.status(201).json({
    _id: foundUser._id,
    username: foundUser.username,
    email: foundUser.email,
    token: generateToken(foundUser),
  });
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  findUser
};
