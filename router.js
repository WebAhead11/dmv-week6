const express = require("express");
const router = express.Router();

//adding handler
const home = require("./handlers/home");
const login = require("./handlers/login");
const signup = require("./handlers/signup");
const loginfo = require("./handlers/logInfo");
const logout = require("./handlers/logout");
const main = require("./handlers/main.js");
// const addVehicle = require("./handlers/addVehicle");
const notFound = require("./handlers/notFound");

router.get("/", home);
router.post("/", login);
router.get("/signup", signup);
router.post("/loginfo", loginfo);
router.get("/logout", logout);
router.get("/main", main);
// router.get("/addVehicle", addVehicle);
//when i add next line i got JS errors and style.css not load at all
router.get("/*", notFound);

function checkAuth(req, res, next) {
  const user = req.user;
  if (!user) {
    res.status(401).send(`
      <h1>Please log in to view this page</h1>
      <a href="/log-in">Log in</a>
    `);
  } else {
    next();
  }
}

module.exports = router;
