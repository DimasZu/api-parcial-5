const express = require('express')
const cors = require('cors')
const {dbConnection} = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.guatemalaPath = '/api/guatemala'
        this.costaricaPath = '/api/costarica'

        ///CONEXION CON LA BASE DE DATOS
        this.conectarDB()

        //Codigo de la capa intermedia (MIDLEWARE)
        this.middlewares()


        //Ruta para ingresar al servidor
        this.routes()
    }

    //Metodo para invocar el codigo de conexion con la base de datos.
    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        ///Politica de acceso CORS para publicaciones web
        this.app.use(cors())

        //Parser Json
        this.app.use(express.json())


        //Accesos publicos
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.guatemalaPath, require('../routes/guatemala'))
        this.app.use(this.costaricaPath, require('../routes/costarica'))
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log("Servidor corriendo en puerto: ", process.env.port)
        })
    }
}

module.exports = Server