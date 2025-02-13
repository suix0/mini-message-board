const { Router } = require("express");
const { getHomepage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getHomepage);

indexRouter.get("/details");

module.exports = indexRouter;
