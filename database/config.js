const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_CNN, {
            
        })
        console.log('La base de datos esta EN LINEA')
    }catch(error){
        console.log(error)
        //throw new Error('Error en la base de datos, Verifique....')
    }
}

module.exports = {
    dbConnection
}