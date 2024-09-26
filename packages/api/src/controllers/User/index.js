const {User, Photo} = require("../../database")
const {createNewProfilePic} =require("../Photo/index")


async function createUser(req, res) {
    const {email, displayName, photoURL } = req.body
    try {
        const newUser = await User.create({
            email,
            displayName,
            include: {all: true}
        })
        
        await createNewProfilePic(newUser, photoURL)
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}


async function getUserInfo(req,res) {
    const {email} = req.body
    try {
        const userData = await User.findOne({
            where: {
                email
            },
            include: {all: true}
        })
        res.status(200).send(userData)
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports ={
    createUser,
    getUserInfo
}