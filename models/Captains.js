const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Captain = sequelize.define("captains", {
    name: DataTypes.STRING,
    planetId: DataTypes.INTEGER,
});
module.exports = Captain;