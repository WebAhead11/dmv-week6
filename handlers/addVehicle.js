// const template_logged = require("./template_logged");
// const db = require("../db/connection");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");

// //the function
// module.exports = (req, res) => {
//   let brandList = [];

//   res.send(
//     template_logged(`
//         <h1>Login Form</h1>
//         <form id="addVehicleForm" method="POST" action="/">
//         <div><label for="car_number">*Car number:</label></div>
//         <div class="inputDiv"><input type="text" minlength="5" maxlength="8" name="car_number" id="car_number" placeholder="car_number" required/></div>
//         <div><label for="brand">*Brand:</label></div>
//         <div><datalist onselect="fillModels()"></datalist></div>

//         <div><label for="password">Password:</label></div>
//         <div class="inputDiv"><input minlength="8" maxlength="30" type="password" name="password" id="password" placeholder="Password" required/></div>
//         <div id="alertMsg"></div>
//         <div class="divButton"><button type="submit">Submit</button></div>
//         <div><a href="/signup" target="_self">SignUp</a></div>
//         </form>
//         <script src="./addVehicle.js" type="text/javascript"></script>
//     `)
//   );
// };
