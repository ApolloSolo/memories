const { Post } = require("../models");

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().select("-__v");
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    res.send("Good Job. One post! " + id);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const body = req.body;
    const newPost = await Post.create(body);
    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
};
