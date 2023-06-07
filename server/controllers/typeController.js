const {TypeName} = require('../models/models')

class TypeController{
    async create(req,res){
        const {name} = req.body
        const type= await TypeName.create({name})
        return res.json(type)
    }

    async getAll(req,res){
        const types = await TypeName.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()