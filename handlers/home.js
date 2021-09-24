const template = require("./template");

//the function
module.exports = (req, res) => {
  res.send(
    template(`
        <h1>Login Form</h1>
        <form id="loginform" method="POST" action="/">
        <div><label for="username">username:</label></div>
        <div class="inputDiv"><input type="text" minlength="8" maxlength="30" name="username" id="username" placeholder="username" required/></div>
        <div><label for="password">Password:</label></div>
        <div class="inputDiv"><input minlength="8" maxlength="30" type="password" name="password" id="password" placeholder="Password" required/></div>
        <div id="alertMsg"></div>
        <div class="divButton"><button type="submit">Submit</button></div>
        <div><a href="/signup" target="_self">SignUp</a></div>
        </form>
        <script src="./login.js" type="text/javascript"></script>
    `)
  );
};
