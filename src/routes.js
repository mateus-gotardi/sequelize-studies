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
routes.get("/planet/:id/captains", PlanetController.captains);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);
routes.put("/planet/:planetId/satelites/:sateliteId", SateliteController.put);
routes.delete("/planet/:planetId/satelites/:sateliteId", SateliteController.delete);

routes.post('/captains', CaptainController.store);
routes.get("/captains", CaptainController.index);
routes.get("/captain/:id", CaptainController.details);
routes.put("/captain/:id", CaptainController.put);
routes.delete("/captain/:id", CaptainController.delete);

routes.post('/captain/newspaceship/:id', SpaceshipController.store);

routes.get("/spaceships", SpaceshipController.index);
routes.get("/spaceship/:id", SpaceshipController.findId);
routes.put("/spaceship/:id", SpaceshipController.put);
routes.delete("/spaceship/:id", SpaceshipController.delete);



module.exports = routes;