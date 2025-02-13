const { Router } = require("express");
const { getMessageDetails } = require("../controllers/detailsController");

const detailsRouter = Router();

detailsRouter.get("/:messageId", getMessageDetails);

module.exports = detailsRouter;
