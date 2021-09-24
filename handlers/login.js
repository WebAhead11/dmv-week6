const template = require("./template");
const db = require("../db/connection");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = (req, res) => {
  let data = req.body;
  const username = data.username;
  const password = data.password;

  db.query("SELECT * FROM users where username=$1 and password=$2", [
    username,
    password,
  ]).then((result) => {
    const users = result.rows;
    if (users.length === 0) {
      res.send(
        template(
          "<h2>We didn't find this user</h2><a href='/'>Back to Login</a>"
        )
      );
    } else {
      const theOwner = users.map((user) => {
        //here afetr validate and get the user owner name we make 2 cookies
        //1 with Token secured one for check login
        //2 for owener name
        const username = user.username;
        const token = jwt.sign({ username }, SECRET);
        res.cookie("user", token, { maxAge: 600000 });
        //this is the second cookie for only welcome MSG and to show who's logged in
        res.cookie("owner_name", user.owner_name);
        //console.log("owner_name " + user.owner_name);
        //console.log("from cookie " + req.cookie("owner_name"));
        return user.owner_name;
      });
      res.redirect("/main");
      // res.send(
      //   template(`
      // <h2>welcome back ${theOwner}</h2>
      // <div><a href='/logout'>Logout</a> | <a href='/UpdateAcount'>Update acount</a> | <a href='/DeleteAcount'>Remove acount</a></div>
      // <h2>Vehicles List</h2>
      // <a href='/addVehicle'>Add Vehicle</a>
      // `)
      // );
    }
    // res.status(200).send(template(`<li>Welcome back ${user.username}</li>`));
    //here we add anchor for adding vehicle and show vehicles list
  });
};
