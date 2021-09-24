const template = require("./template");

//the function
module.exports = (req, res) => {
  res.send(
    template(`
        <h1>SignUp Form</h1>
        <form id="registerForm" action="/logInfo" method="POST">
        <div><label for="username">*Username:</label></div>
        <div class="inputDiv"><input type="text" minlength="8" maxlength="30" name="username" id="username" placeholder="username" required/></div>
        <div><label for="password">*Password:</label></div>
        <div class="inputDiv"><input minlength="8" maxlength="30" type="password" name="password" id="password" placeholder="Password" required/></div>
        <div><label for="confirm">*Confirm Password:</label></div>
        <div class="inputDiv"><input minlength="8" maxlength="30" type="password" name="confirm" id="confirm" placeholder="Password" required/></div>
        <div><label for="email">*Email:</label></div>
        <div class="inputDiv"><input minlength="10" maxlength="30" type="email" name="email" id="email" placeholder="Email" required/></div>
        <div><label for="username">*Owner Full Name:</label></div>
        <div class="inputDiv"><input type="text" minlength="3" maxlength="30" name="owner_name" id="owner_name" placeholder="Owner Name" required/></div>
        <div><label for="username">*GOV id:</label></div>
        <div class="inputDiv"><input type="text" minlength="9" maxlength="9" name="govid" id="govid" placeholder="GOV-ID" required/></div>
        <div><label for="mobile">Mobile:</label></div>
        <div class="inputDiv"><input type="text" minlength="10" maxlength="10" name="mobile" id="mobile" placeholder="Mobile"/></div>
        <div><label for="username">Address:</label></div>
        <div class="inputDiv"><input type="text" minlength="4" maxlength="30" name="address" id="address" placeholder="Address"/></div>
        <div id="alertMsg"></div>
        <div class="divButton"><button type="submit">Submit</button></div>
        </form>
        <script src="./signupForm.js" type="text/javascript"></script>
    `)
  );
};
