const { Router } = require("express");
const { getHomepage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getHomepage);

module.exports = indexRouter;
