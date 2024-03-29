const Users = require("./../../models/users");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const token = jwt.sign({ admin: true }, "SzeptuSzeptu");

    if (!token) {
      return res.status(400).json({ success: false, message: "Missing token" });
    }

    try {
      const decoded = jwt.verify(token, "SzeptuSzeptu");

      if (!decoded.admin) {
        return res
          .status(200)
          .json({ success: false, message: "Not authorized" });
      }

      const users = await Users.find({}, { username: 1, _id: 0 });

      return res.status(200).json({
        success: true,
        users: users.map((user) => user.username),
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getUsers,
};
