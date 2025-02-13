const { appendData } = require("../db");
const asyncHandler = require("express-async-handler");

const getForm = (req, res) => {
  res.render("form.ejs");
};

const postFormData = asyncHandler(async (req, res) => {
  const formData = req.body;
  await appendData(formData);
  res.redirect("/");
});

module.exports = { getForm, postFormData };
