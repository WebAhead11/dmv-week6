const template = require("./template");

module.exports = (req, res) => {
  res.send(template(`<h2>Missed URL</h2>`));
};
