const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("user", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,

        },
        displayName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }   
    }, {
        timestamps: true,
        createdAt: "registradoEl",
        updatedAt: "ultimaModificacion",
        paranoid: true,
        deletadedAt: "eliminadoDesde"
    })
}