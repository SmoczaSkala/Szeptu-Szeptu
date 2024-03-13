const express = require("express");
const router = express.Router();
const usersService = require("./service/register");

router.post("/api/users", usersService.addUser);

module.exports = router;
