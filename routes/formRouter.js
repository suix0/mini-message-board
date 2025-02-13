const { Router } = require("express");
const { getForm, postFormData } = require("../controllers/formController");

const formRouter = Router();

formRouter.get("/", getForm);
formRouter.post("/", postFormData);

module.exports = formRouter;
