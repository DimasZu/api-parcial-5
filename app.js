//Se importa el requerimiento de la libreria
//Para utilizar el archivo .env
require('dotenv').config()
const Server = require('./models/server')

const server = new Server()

server.listen()
