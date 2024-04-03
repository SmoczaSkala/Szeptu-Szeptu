const Message = require("./../../models/messages");
const Users = require("./../../models/users");
const jwt = require("jsonwebtoken");

const loadReceivedMessages = async (req, res) => {
  const token = req.query.token;
  const userId = req.query.userId;

  try {
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Token missing" });
    }

    const decoded = jwt.verify(token, "SzeptuSzeptu");

    if (!decoded.id) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid user" });
    }

    const decodedUserId = userId;

    if (userId !== decodedUserId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid user ID" });
    }

    const receivedMessages = await Message.find({ receiver: userId });

    return res.status(200).json({ success: true, messages: receivedMessages });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const loadSentMessages = async (req, res) => {
  const token = req.query.token;
  const decoded = jwt.verify(token, "SzeptuSzeptu");
  const userId = req.query.userId;

  try {
    if (!decoded.id) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid user" });
    }

    const decodedUserId = userId;

    if (userId !== decodedUserId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid user ID" });
    }

    const sentMessages = await Message.find({ sender: userId });

    return res.status(200).json({ success: true, messages: sentMessages });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// const getMessages = async (req, res) => {
//   try {
//     const token = req.query.token;
//     const decoded = jwt.verify(token, "SzeptuSzeptu");

//     if (!decoded.email) {
//       return res.status(200).json({ success: false });
//     }
//     console.log(decoded);

//     const receivedMessages = await Messages.find({ receiver: decoded.email });
//     const sentMessages = await Messages.find({ sender: decoded.email });

//     return res.status(200).json({
//       success: true,
//       sentMessages,
//       receivedMessages,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false });
//   }
// };

const findBy = async (search, by, what) => {
  const user = await Users.findOne({ [by]: search });

  if (!user) {
    throw new Error(`User not found by ${by}: ${search}`);
  }

  return user[what];
};

const addMessage = async (req, res) => {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, "SzeptuSzeptu");

    if (!decoded.email) {
      return res.status(200).json({ success: false });
    }

    const newEmail = {
      sender: decoded.email,
      receiver: req.body.receiver,
      content: req.body.content,
    };

    const message = await Messages.create(newEmail);

    message.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;

    const message = await Messages.findById(messageId);
    if (!message) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found" });
    }

    await Messages.findByIdAndDelete(messageId);

    return res
      .status(200)
      .json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  loadReceivedMessages,
  loadSentMessages,
  addMessage,
  deleteMessage,
  findBy,
};
