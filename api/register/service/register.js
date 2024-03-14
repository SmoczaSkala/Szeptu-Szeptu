const Users = require("./../../models/users");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  const user = req.body;

  try {
    const token = jwt.sign(
      {
        admin: false,
      },
      "SzeptuSzeptu"
    );

    const newUser = await Users.create(user);

    return res.status(200).json({ success: true, user: newUser, token });
  } catch (error) {
    console.error("Błąd rejestracji:", error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  addUser,
};
