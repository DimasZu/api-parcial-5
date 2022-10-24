const {Router} = require('express')
const router = Router()
const{GuatemalaGet, 
    GuatemalaPost,
    GuatemalaPut,
    GuatemalaDelete} = require('../controllers/guatemala')

//Metodo para devolver valores usando verbo GET de HTTP
router.get('/', GuatemalaGet)

//Codigo para insertar ---POST
router.post('/', GuatemalaPost)

//Codigo para actualizar  ---PUT
router.put('/:id', GuatemalaPut)

//Codigo para eliminar  ---DELETE
router.delete('/:id', GuatemalaDelete)



module.exports = router