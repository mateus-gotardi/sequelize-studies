const Captain = require("../models/Captains")
const Planet = require('../models/Planet')

module.exports = {
    async store(req, res) {
        const { name, planetId } = req.body;
        const captain = await Captain.create({ name, planetId });
        return res.json(captain).status(200);
    },

    async index(req, res) {
        const captain = await Captain.findAll({
            include: { association: "spaceships" }
        });
        return res.json(captain);
    },
    async details(req, res) {
        const { id } = req.params
        let details = await Captain.findByPk(id, {
            include: [{ association: "spaceships",} ],
        });
        let searchPlanet = await Planet.findByPk(details.planetId);
        if (!details) {
            return res.send("nenhum piloto encontrado com esse id");
        } else {
            let json1= JSON.stringify(details,)
            let json2 = JSON.stringify(searchPlanet)
            let volta = JSON.parse(json1)
            let planet= JSON.parse(json2)
            let response = {...volta, planet}

            return res.json(response);
        }


    },
    async put(req, res) {
        const { name, planetId } = req.body;
        await Captain.update(
            { name, planetId },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.send("Captain update with sucess");
    },

    async delete(req, res) {
        await Captain.destroy({
            where: {
                id: req.params.id,
            },
        });


        return res.send("Sucess! Captain exclude.");
    },
}