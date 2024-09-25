const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_LOCAL_HOST,
    DB_LOCAL_NAME,
    DB_LOCAL_USER,
    DB_LOCAL_PASSWORD,
    PATH_TO_CA,
    PATH_TO_CERT,
    PATH_TO_KEY
} = process.env

const sequelize =
    process.env.NODE_ENV === 'production'
        ? new Sequelize({
              protocol: 'tcp',
              dialect: 'postgres',
              username: DB_USER,
              password: DB_PASSWORD,
              host: DB_HOST,
              database: DB_NAME,
              ssl: {
                  rejectUnauthorized: true,
                  ca: fs.readFileSync(PATH_TO_CA).toString(),
                  key: fs.readFileSync(PATH_TO_KEY).toString(),
                  cert: fs.readFileSync(PATH_TO_CERT).toString()
              },
              pool: {
                  max: 20,
                  idle: 30000,
                  acquire: 80000
              }
          })
        : new Sequelize({
              database: DB_LOCAL_NAME,
              username: DB_LOCAL_USER,
              host: DB_LOCAL_HOST,
              password: DB_LOCAL_PASSWORD,
              protocol: 'tcp',
              dialect: 'postgres',
              pool: {
                  max: 5,
                  min: 0,
                  idle: 20000,
                  acquire: 30000
              },
              ssl: {
                  rejectUnauthorized: false
              }
          })

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)))
    })

modelDefiners.forEach((model) => model(sequelize))
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1]
])
sequelize.models = Object.fromEntries(capsEntries)

const {User } = sequelize.models


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize // para importart la conexión { conn } = require('./db.js');
}
