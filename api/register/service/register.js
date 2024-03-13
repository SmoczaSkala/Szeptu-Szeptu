const Users = require("./../../models/users");

const addUser = async (req, res) => {
  const user = req.body;

  try {
    const token = req.query.token;
    const decoded = jwt.verify(token, "SzeptuSzeptu");

    if (!decoded.admin) {
      return res.status(200).json({ success: false });
    }

    const newUser = await Users.create(user);

    return res.status(200).json({ success: true, user: newUser });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  addUser,
};
