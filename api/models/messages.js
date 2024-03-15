const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const Messages = mongoose.model("messages", MessageSchema);
module.exports = Messages;
