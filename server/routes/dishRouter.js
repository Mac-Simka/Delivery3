const Router = require ('express')
const dishController = require('../controllers/dishController')

const router = new Router()

router.post('/',dishController.create)
router.get('/', dishController.getAll)
router.get('/', dishController.getOne)


module.exports = router