const express = require("express");
const router = express.Router();
const loginService = require("./service");
const messagesRoutes = require("./../mesages/mesages.route");

router.post("/api/user/login", loginService.userLogin); 
router.use("/api/messages", messagesRoutes);

module.exports = router;
