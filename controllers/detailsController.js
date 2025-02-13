const { getMessage } = require("../db");
const asyncHandler = require("express-async-handler");

const getMessageDetails = asyncHandler(async (req, res) => {
  const messageId = req.params.messageId;
  const message = await getMessage(messageId);
  res.render("details", { message: message });
});

module.exports = { getMessageDetails };
