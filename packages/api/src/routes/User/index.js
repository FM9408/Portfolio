const deletes = require("./Deletes/deletes")
const gets = require("./Gets/gets")
const posts = require("./Posts/posts")
const puts = require("./Puts/puts")
const Router = require("express")


const mainUserRouter = Router()

mainUserRouter.use("/view", gets)
mainUserRouter.use("/create", posts)
mainUserRouter.use("/delete", deletes)
mainUserRouter.use("/update", puts)




module.exports = mainUserRouter