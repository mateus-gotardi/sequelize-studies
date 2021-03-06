const Captain = require("../models/Captains");
const Planet = require("../models/Planet")

module.exports = {
    async store(req, res) {
        const { name, position } = req.body;
        const planet = await Planet.create({ name, position });
        return res.json(planet).status(200);
    },
    async index(req, res) {
        const planets = await Planet.findAll();

        return res.json(planets);
    },
    async captains(req, res) {
        const { id } = req.params

        let details = await Planet.findByPk(id, {
            include: Captain
        });
        return res.json(details);

    },
    async put(req, res) {
        const { name, size, position } = req.body;
        await Planet.update(
            { name, size, position },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.send("Planet update with sucess");
    },
    async delete(req, res) {
        await Planet.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.send("Sucess! Planet exclude.");
    },
}