require("dotenv").config()
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
    }).finally(() => {
        console.log(`Servidor levantado en el puerto ${PORT}`)
    }).catch((err) => {
        console.log(`No se pudo iniciar la conexión debido al error ${err.message}`)
        conn.close()
    })
})