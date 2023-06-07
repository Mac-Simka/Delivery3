const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false }
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const BasketDish = sequelize.define('basket_dish', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Dish = sequelize.define('dish', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
});

const ShopName = sequelize.define('shop_name', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const TypeName = sequelize.define('type_name',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const DishIngredients = sequelize.define('dish_ingredients', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ingredient: { type: DataTypes.STRING, allowNull: false }
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDish);
BasketDish.belongsTo(Basket);

ShopName.hasMany(Dish);
Dish.belongsTo(ShopName);

TypeName.hasMany(Dish);
Dish.belongsTo(TypeName);

Dish.hasOne(DishIngredients);
DishIngredients.belongsTo(Dish);

Dish.hasMany(BasketDish);
BasketDish.belongsTo(Dish);

module.exports = {
    User,
    Basket,
    BasketDish,
    Dish,
    DishIngredients,
    ShopName,
    TypeName
};
