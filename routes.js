const { Router } = require("express");

const DataController = require("./controllers/DataController");

const routes = Router();

routes.get("/datas", DataController.index);
routes.post("/datas", DataController.store);

module.exports = routes;
