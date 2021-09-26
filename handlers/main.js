const template_logged = require("./template_logged");
const db = require("../db/connection");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

let vehcilesList;

module.exports = (req, res) => {
  const SECRET = process.env.SECRET;
  const token = req.cookies.user;
  const user = jwt.verify(token, SECRET);
  //user.username ->>> this is the username that logged in now we need to select all his vehciles

  db.query(
    "SELECT users.id,vehicles.id, vehicles.car_number from users inner join vehicles on users.id=vehicles.user_id where users.username=$1",
    [user.username]
  ).then((results) => {
    //should be deleted after testing
    const cars = results.rows;
    if (cars.length === 0) {
      vehcilesList =
        "<div class='alertMsg'>Vehicles list is Empty, you can add in the link above.</div>";
    } else {
      vehcilesList = "<ul>";
      const theList = cars.map((car) => {
        //the del update and ... better change to icons the ... will be loading the full data
        vehcilesList +=
          "<li><a href='/deleteVehcile'>Delete</a>|<a href='/updateVehcile'>Update</a>|<a href='#'>...</a>|" +
          car.car_number +
          " - </li>";
      });
      vehcilesList += "</ul>";
    }
  });
  res.send(
    template_logged(
      `
        <h2>Vehicles List</h2>
        <a href='/addVehicle'>Add Vehicle</a> 
        <div>${vehcilesList}</div>
    `,
      req.cookies.owner_name
    )
  );
};
