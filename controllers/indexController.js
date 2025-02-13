const { messages } = require("../db");

const getHomepage = (req, res, next) => {
  res.render("index.ejs", { messages: messages });
};

module.exports = { getHomepage };
