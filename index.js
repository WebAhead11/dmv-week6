const express = require("express");
const server = express();
const router = require("./router");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

server.use(express.urlencoded({ extended: false }));
server.use(router);
server.use(express.static("public"));
server.use(cookieParser());

const SECRET = process.env.SECRET;

//should be checked deaply if there is need for it or better middleware AUTH
server.use((req, res, next) => {
  const token = req.cookies.user;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
});

// server.get("/error", (req, res, next) => {
//   const fakeError = new Error("uh oh");
//   fakeError.status = 403;
//   next(fakeError);
// });

function handleErrors(error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res.status(status).send(`<h1>Something went wrong</h1>`);
}

server.use(handleErrors);

server.listen(3000);
