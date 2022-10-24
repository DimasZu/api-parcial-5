const {Schema, model} = require('mongoose')

const CostaricaSchema = Schema({
    codigo:{
        type:String,
        required:[true,'El Codigo es Requerido']
    },
    nombreproyecto:{
        type:String,
        required:[true,'La Nombre del Proyecto es Requerido']
    },
    paisqueejecuta:{
        type:String,
        required:[true,'El Monto es Requerido']
    },
    fechacierre:{
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

module.exports = model('Costarica', CostaricaSchema)