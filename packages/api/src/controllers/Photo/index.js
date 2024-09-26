const {Photo} = require("../../database")

const createNewProfilePic = async (user, photoURL) => {
    user.createProfilePic({photoURL}).then((response) => {
        return response.data
    }).catch((err) => {
        throw new Error(err)
    })
} 

module.exports={createNewProfilePic}