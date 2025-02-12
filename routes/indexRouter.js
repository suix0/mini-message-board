const { Router } = require("express");
const {
  getHomepage,
  getForm,
  postFormData,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getHomepage);

indexRouter.get("/new", getForm);

indexRouter.post("/new", postFormData);

module.exports = indexRouter;
