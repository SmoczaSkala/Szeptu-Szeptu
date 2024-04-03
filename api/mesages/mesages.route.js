const express = require("express");
const router = express.Router();
const receivedMessagesService =
  require("./service/messages").loadReceivedMessages;
const sentMessagesService = require("./service/messages").loadSentMessages;
const sendMessageService = require("./service/messages").addMessage;

router.get("/api/messages/received", receivedMessagesService);
router.get("/api/messages/sent", sentMessagesService);
router.post("/api/messages/send", sendMessageService);

module.exports = router;
