const Router = require("express")
const {
    createUser
} = require("../../../controllers/User/index")
const posts= Router()


posts.post('/createUser', createUser)
module.exports =posts