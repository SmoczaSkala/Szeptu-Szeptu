const express = require("express");
const router = express.Router();
const usersService = require("./service/users");

router.get("/api/users", usersService.getUsers);

module.exports = router;
