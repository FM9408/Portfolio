const Router = require("express")
const gets = Router()
const {getUserInfo} = require("../../../controllers/User")

gets.get("/user", getUserInfo)
module.exports =gets