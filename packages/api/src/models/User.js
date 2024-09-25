const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("user", {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
            default: DataTypes.UUIDV1
        },
        displayName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        photoURL: {
            type: DataTypes.TEXT,
            allownull: false,
            validate: {
                isURL: true,

            }
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