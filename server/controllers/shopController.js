const {ShopName} = require('../models/models')
class ShopController{
    async create(req,res){
        const {name} = req.body
        const shop= await ShopName.create({name})
        return res.json(shop)
    }

    async getAll(req,res){
        const shops = await ShopName.findAll()
        return res.json(shops)
    }

}

module.exports = new ShopController()