const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Captain = require("../models/Captains");
const Spaceship = require("../models/Spaceship")

Planet.hasMany(Satelite, { onDelete: "CASCADE", onIpdate: "CASCADE", });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

Captain.belongsTo(Planet, { onDelete: "CASCADE", onIpdate: "CASCADE", });
Planet.hasMany(Captain, { onDelete: "CASCADE", onIpdate: "CASCADE", });

Captain.belongsToMany(Spaceship, {
    foreingKey: 'captainId',
    through: "captains_spaceships",
    as: "spaceships"
});

Spaceship.belongsToMany(Captain, {
    foreingKey: 'spaceshipId',
    through: "captains_spaceships",
    as: "captains"
});



module.exports = { Planet, Satelite, Captain, Spaceship };