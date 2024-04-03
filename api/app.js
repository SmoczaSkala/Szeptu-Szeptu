const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const usersApi = require("./users/users.route");
const loginApi = require("./login/login.route");
const receivedMessagesApi = require("./../api/mesages/mesages.route");
const sentMessagesApi = require("./../api/mesages/mesages.route");
const sendMessagesApi = require("./../api/mesages/mesages.route");
const registerApi = require("./register/register.route");

app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cookieParser());
app.use(usersApi);
app.use(loginApi);
app.use(registerApi);
app.use(receivedMessagesApi);
app.use(sentMessagesApi);
app.use(sendMessagesApi);

const db =
  // kongoDB
  "mongodb+srv://LordSithanski:SaXL4upic7tAWP7C@szeptu-szeptu.uox79au.mongodb.net/szeptu-szeptu";
// kongoDB

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected with database");
});

app.get("*", function (req, res) {
  res.status(301).redirect("/");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server up and running on port ${process.env.PORT || 8080}`);
});
