const Router = require("express")
const mainUserRouter = require("./User/index")


const mainRouter = Router()
mainRouter.use("/user", mainUserRouter)


module.exports = mainRouter