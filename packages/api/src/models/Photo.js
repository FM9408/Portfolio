const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("photo", {
        photoURL: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        uuid:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4
        }
    }, {
        timestamp: true,
        createdAt: "subidoEl",
        paranoid: true,
        deletedAt: "borradoEl"
    })
}