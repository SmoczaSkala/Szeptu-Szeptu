const Users = require("./../../models/users");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const credentials = req.body;
  const { username, password } = credentials;

  try {
    const cfg = { username, password };
    const user = await Users.findOne(cfg);

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        "SzeptuSzeptu"
      );

      return res.status(200).json({ success: true, token });
    }

    return res.status(200).json({ success: false });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
module.exports = {
  userLogin,
};
