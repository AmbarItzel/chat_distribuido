// userRoutes.js
const router = require("express").Router();
const { createUser, getUserByUsername, loginUser } = require("../controller/userController");

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/username/:username", getUserByUsername);

module.exports = router;