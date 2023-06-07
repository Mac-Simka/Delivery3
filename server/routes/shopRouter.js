const Router = require ('express')
const shopController = require('../controllers/shopController')

const router = new Router()

router.post('/',shopController.create)
router.get('/',shopController.getAll)

module.exports = router