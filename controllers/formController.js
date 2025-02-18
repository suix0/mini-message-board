const { addData } = require("../db/query");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("to")
    .notEmpty()
    .withMessage("Name can't be empty")
    .isLength({ min: 1, max: 20 })
    .withMessage("Message has a maximum of 30 characters."),
  body("text")
    .notEmpty()
    .withMessage("Message can't be empty")
    .isLength({ min: 1, max: 35 })
    .withMessage("Message has a maximum of 35 characters."),
];

const getForm = (req, res) => {
  res.render("form.ejs");
};

const postFormData = [
  validateMessage,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", { errors: errors.array() });
    }
    const formData = req.body;
    await addData(formData);
    res.redirect("/");
  }),
];

module.exports = { getForm, postFormData };
