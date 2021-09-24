const template = require("./template");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  res.clearCookie("user");
  res.clearCookie("owner_name");
  res.redirect("/");
};
