const template_logged = require("./template_logged");
const db = require("../db/connection");
const cookieParser = require("cookie-parser");

const SECRET = process.env.SECRET;
module.exports = (req, res) => {
  res.send(
    template_logged(
      `
<h2>Vehicles List</h2>
<a href='/addVehicle'>Add Vehicle</a> 
`,
      req.cookies.owner_name
    )
  );
};

//and list of all vehciles
