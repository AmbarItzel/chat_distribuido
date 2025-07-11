const router = require("express").Router();
const { createRoom, joinRoom } = require("../controller/roomController");

router.post("/create", createRoom);
router.post("/join", joinRoom);

module.exports = router;