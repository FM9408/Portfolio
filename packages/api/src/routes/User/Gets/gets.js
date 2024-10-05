const Router = require("express")
const gets = Router()
const {getUserInfo} = require("../../../controllers/User")

gets.post("/user", getUserInfo)
module.exports =gets