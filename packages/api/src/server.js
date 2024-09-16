const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const { NODE_ENV, CLIENT_URL } = process.env
const mainRouter = require("./routes/index")

const server = express()
require("./database")

server.use(helmet())
server.use(bodyParser.json({"limit": "50mb"}))
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
server.use(cookieParser())
server.use(morgan("dev"))
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", NODE_ENV === "production" ? CLIENT_URL : "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Accept, Origin, Content-Type")
    res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, OPTIONS, POST")
    next()
})

server.use("/", mainRouter)

server.use((err, req, res, next) => {
    const errMsg = err.message
    const errCde = err.status

    res.status(errCde).json({
        err: errCde,
        msg: errMsg
    })
})

module.exports = server