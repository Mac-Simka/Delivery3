const Router = require ('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const shopRouter = require('./shopRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/dish', dishRouter)
router.use('/shop', shopRouter)
router.use('/type', typeRouter)

module.exports = router