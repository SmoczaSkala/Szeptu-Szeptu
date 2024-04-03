const express = require("express");
const router = express.Router();
const receivedMessagesService =
  require("./service/messages").loadReceivedMessages;
const sentMessagesService = require("./service/messages").loadSentMessages;

router.get("/api/messages/received", receivedMessagesService);
router.post("/api/messages/sent", sentMessagesService);

module.exports = router;
