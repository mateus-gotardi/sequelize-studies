const express = require("express")
const routes = express.Router()
const PlanetController = require("../Controller/PlanetController")
const SateliteController = require('../Controller/SateliteController')
const CaptainController = require('../Controller/CaptainController')
const SpaceshipController = require('../Controller/SpaceshipController')

routes.post('/planets', PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);
routes.put("/planet/:planetId/satelites/:sateliteId", SateliteController.put);
routes.delete("/planet/:planetId/satelites/:sateliteId", SateliteController.delete);

routes.post('/captains', CaptainController.store);
routes.get("/captains", CaptainController.index);
routes.get("/captain/:id", CaptainController.details);
routes.put("/captains/:id", CaptainController.put);
routes.delete("/captains/:id", CaptainController.delete);

routes.post('/captain/newspaceship/:id', SpaceshipController.store);

routes.get("/spaceships", SpaceshipController.index);
routes.get("/spaceships/:id", SpaceshipController.findId);
routes.put("/spaceships/:id", SpaceshipController.put);
routes.delete("/spaceships/:id", SpaceshipController.delete);



module.exports = routes;