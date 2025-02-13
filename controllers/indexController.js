const { messages } = require("../db");

const getHomepage = (req, res) => {
  res.render("index.ejs", { messages: messages });
};

module.exports = { getHomepage };
