const {Router} = require('express')
const router = Router()
const{
    CostaricaGet,
    CostaricaPost,
    CostaricaPut,
    CostaricaDelete} = require('../controllers/costarica')

//Metodo para devolver valores usando verbo GET de HTTP
router.get('/', CostaricaGet)

//Codigo para insertar ---POST
router.post('/', CostaricaPost)

//Codigo para actualizar  ---PUT
router.put('/:id', CostaricaPut)

//Codigo para eliminar  ---DELETE
router.delete('/:id', CostaricaDelete)



module.exports = router