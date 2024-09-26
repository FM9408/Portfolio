require("dotenv").config()
const {userGenerator}= require("./src/mock/usersMock")
const server = require("./src/server")
const { conn } = require("./src/database")
const PORT = process.env.PORT || 3001 
const {NODE_ENV} = process.env


server.listen(PORT, () => {
    conn.sync({
        force: NODE_ENV !== "production",
        alter: NODE_ENV === "production",
    }).then((res) => {
        console.log(
            `Conexion exitosa a la base de datos ${res.config.database}`
        )
    }).then(() => {
        userGenerator(20).forEach(async({email, photoURL, displayName}) => {
            const mockUser = await conn.model("user").create({
                email,
                displayName
            })
            mockUser.createProfilePic({photoURL})
        })
    })
    .finally(() => {
        console.log(`Servidor levantado en el puerto ${PORT}`)
    }).catch((err) => {
        console.log(`No se pudo iniciar la conexión debido al error ${err.message}`)
        conn.close()
    })
})