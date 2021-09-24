let btn = document.querySelector("form");
btn.addEventListener("submit", (Event) => {
  Event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let alertMsg = document.getElementById("alertMsg");

  //here we should check validation and send post
  if (
    checkChar(username, arrAllowedChars) &&
    checkChar(password, arrAllowedChars)
  ) {
    btn.submit();
  } else {
    alertMsg.innerHTML =
      "You typed illegal charachters, you can type 0-9,a-z,A-Z and .";
  }
});
