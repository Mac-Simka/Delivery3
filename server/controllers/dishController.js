const uuid = require('uuid')
const path = require('path')
const {Dish} = require("../models/models");

class DishController{
    async create(req,res){
        const {name,price, shopNameId, typeNameId} = req.body
        const {img} = req.files
        let filename = uuid.v4()+'.jpg'
        img.mv(path.resolve(__dirname,'..','static',filename))


        const dish = await Dish.create({name,price, shopNameId, typeNameId, img:filename})

        return res.json(dish)
    }

    async getAll(req,res){
        let {shopNameId, typeNameId, page} = req.query
        page=page || 1
        let limit = 8
        let offset = page*limit-limit

        let dishes
        if(!shopNameId && !typeNameId){
            dishes = await Dish.findAndCountAll({limit,offset})
        }
        if(!shopNameId && typeNameId){
            dishes = await Dish.findAndCountAll({where:{typeNameId},limit,offset})

        }
        if(shopNameId && !typeNameId){
            dishes = await Dish.findAndCountAll({where: {shopNameId},limit,offset})

        }
        if(shopNameId && typeNameId){
            dishes = await Dish.findAndCountAll({where: {typeNameId, shopNameId},limit,offset})

        }
        return res.json(dishes)
    }

    async getOne(req,res){
        const{id} = req.parameters
        const dish = await Dish.findOne(
            {where:{id}}
        )
    }

}

module.exports = new DishController()