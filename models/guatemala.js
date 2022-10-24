const {Schema, model} = require('mongoose')

const GuatemalaSchema = Schema({
    codigo:{
        type:String,
        required:[true,'El Codigo es Requerido']
    },
    nombreproyecto:{
        type:String,
        required:[true,'El Nombre del Proyecto es Requerido']
    },
    monto:{
        type:Number,
        required:[true,'El Monto es Requerido']
    },
    fecha:{
        type:String,
        required:[true,'La Fecha es Requerido']
    },
    alumno:{
        type:String,
        required:[true,'nombre de Alumno']
    },
    estado:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Guatemala', GuatemalaSchema)