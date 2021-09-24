const template = require("./template");
const db = require("../db/connection");

module.exports = (req, res) => {
  let data = req.body;
  const username = data.username;
  const password = data.password;
  const confirm = data.confirm;
  const email = data.email;
  const owner_name = data.owner_name;
  const govid = data.govid;
  const mobile = data.mobile;
  const address = data.address;

  //so first step we check if username or email allready used by other sign up
  db.query("SELECT * FROM users where username=$1 or email=$2 or gov_id=$3", [
    username,
    email,
    govid,
  ]).then((result) => {
    const users = result.rows;
    if (users.length === 0) {
      //we didn't found match for username and password, now we can insert new record with details
      db.query(
        "INSERT INTO users (owner_name,username,gov_id,email,password,mobile,address) VALUES($1,$2,$3,$4,$5,$6,$7)",
        [owner_name, username, govid, email, password, mobile, address]
      );
      res.send(
        template(
          '<h2>Thank you for signup, now you allowd to use D.M.V System</h2><a href="/">Back to login</a>'
        )
      );
    } else {
      res.send(
        template(
          "<div id='alertMsg'>the username/email/govID you typed already exist in our records</div><a href='/signup'>Back to signup</a>"
        )
      );
    }
  });
};
