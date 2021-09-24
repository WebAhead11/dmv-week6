const express = require("express");
const server = express();
const router = require("./router");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static("public"));
server.use(router);

const PORT = process.env.PORT || 3000;
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

function handleErrors(error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res.status(status).send(`<h1>Something went wrong</h1>`);
}

server.use(handleErrors);

server.listen(PORT);
