const Spaceship = require("../models/Spaceship")
const Captain = require("../models/Captains")

module.exports = {
    async store(req, res) {
        const { id } = req.params
        const { name, serialNumber } = req.body;
        console.log(id, name, serialNumber)
        const captain = await Captain.findByPk(id)

        if (!captain) {
            res.send('este capitão não existe')
        } else {
            const [spaceship] = await Spaceship.findOrCreate(
                { where: { name, serialNumber } });
            await captain.addSpaceship(spaceship)
            return res.json(spaceship).status(200);
        }
    },
    async index(req, res) {
        const spaceships = await Spaceship.findAll();
        return res.json(spaceships);
    },
    async findId(req, res) {
        const { id } = req.params
        const spaceships = await Spaceship.findByPk(id);
        return res.json(spaceships);
    },
    async put(req, res) {
        const { name, serialNumber } = req.body;
        await Spaceship.update(
            { name, serialNumber },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.send("Spaceship update with sucess");
    },
    async delete(req, res) {
        await Spaceship.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.send("Sucess! Spaceship exclude.");
    },
}