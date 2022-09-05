const router = require("express").Router();
const { registerUser, getUsers, findUser, loginUser } = require("../../controllers/users");
const protected = require("../../middleware/authMiddleware");

router.get("/", getUsers);
router.get("/:id", protected, findUser);
router.post("/register", registerUser);
router.post("/login", loginUser)

module.exports = router;
