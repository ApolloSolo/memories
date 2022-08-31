const router = require("express").Router();
const { getAllPosts, getPost, createPost } = require("../../controllers/posts");

router.get("/all", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost)

module.exports = router;
