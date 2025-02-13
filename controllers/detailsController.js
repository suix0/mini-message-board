const { getMessage } = require("../db");
const CustomNotFound = require("../errors/customNotFound");
const asyncHandler = require("express-async-handler");

const getMessageDetails = asyncHandler(async (req, res) => {
  const messageId = req.params.messageId;
  const message = await getMessage(messageId);

  if (!message) {
    throw new CustomNotFound("Message Not Found");
  }

  res.render("details", { message: message });
});

module.exports = { getMessageDetails };
