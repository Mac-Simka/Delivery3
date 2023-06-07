import {makeAutoObservable} from "mobx";

export default class Store {
    constructor() {
        this._cartDishes= []
        makeAutoObservable(this)
    }
    setCartDishes(dish) {
        const isAlreadyOrdered = this._cartDishes.some(iDish => iDish.id === dish.id);

        if (isAlreadyOrdered) {
            console.log("Already ordered");
        } else {
            this._cartDishes.push(dish);
            localStorage.setItem('cartDishes', JSON.stringify(this._cartDishes));
            console.log(this._cartDishes);
        }
    }
    removeFromCart(dishId) {
        this._cartDishes = this._cartDishes.filter(iDish => iDish.id !== dishId);
        localStorage.setItem('cartDishes', JSON.stringify(this._cartDishes));
        console.log(this._cartDishes);
    }
    setEmptyCart(){
        localStorage.removeItem('cartDishes');
        this._cartDishes = []

    }
    get cartDishes() {
        try {
            const cartDishesFromStorage = localStorage.getItem('cartDishes');
            const cartDishes = cartDishesFromStorage ? JSON.parse(cartDishesFromStorage):[];
            console.log(cartDishes);
            return cartDishes;
        } catch (error) {
            console.error('Error retrieving cartDishes from localStorage:', error);
            return [];
        }
    }

}
