const { getMessages } = require("../db/query.js"); // Destructure getMessages

const getHomepage = async (req, res, next) => {
  const messages = await getMessages();
  res.render("index.ejs", { messages: messages });
};

module.exports = { getHomepage };
