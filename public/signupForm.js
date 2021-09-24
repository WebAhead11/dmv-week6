let btn = document.querySelector("form");
btn.addEventListener("submit", (Event) => {
  Event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let email = document.getElementById("email").value;
  let owner_name = document.getElementById("owner_name").value;
  let gov_id = document.getElementById("govid").value;
  let mobile = document.getElementById("mobile").value;
  let address = document.getElementById("address").value;

  let alertMsg = document.getElementById("alertMsg");

  //here we should check validation and send post
  if (
    checkChar(username, arrAllowedChars) &&
    checkChar(password, arrAllowedChars) &&
    checkChar(confirm, arrAllowedChars) &&
    checkChar(email, arrAllowedCharsEmail) &&
    checkChar(owner_name, arrOwnerNameChars) &&
    checkChar(gov_id, IDchars) &&
    checkChar(mobile, IDchars) &&
    checkChar(address, arrAddress)
  ) {
    btn.submit();
  } else if (password != confirm) {
    alertMsg.innerHTML =
      "please type password and conifrm password that match.";
  } else {
    alertMsg.innerHTML =
      "You typed illegal charachters,<ul><li>Username can include: 0-9,a-z,A-Z and .</li><li>password/confirm can include: 0-9,a-z,A-Z and .</li><li>Email can include: 0-9,a-z,A-Z,@ and .</li><li>Owner full name can include: a-z,A-Z, and spaces</li><li>GOVID can include: only 0-9</li><li>mobile(optional field) can include only 0-9</li><li>address(optional field) can include 0-9,a-z,A-Z, ,,. and spaces.</li></ul>";
  }
});
