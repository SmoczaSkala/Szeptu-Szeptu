const express = require("express");
const router = express.Router();
const loginService = require("./service");
const messagesRoutes = require("./../messages/message.route");

router.post("/api/user/login", loginService.userLogin);
router.use("/messages", messagesRoutes);

module.exports = router;
