import {makeAutoObservable} from "mobx";

export default class Store {
    constructor() {
        this._shops = []
        this._types = []
        this._dishes= []
        this._selectedShop ={}
        this._selectedType ={}
        this._page=1
        this._totalCount = 0
        makeAutoObservable(this)
    }
    setSelectedShop(shop){
        this.setPage(1)
        this._selectedShop = shop
    }
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setShops(shops){
        this._shops = shops
    }
    setTypes(types){
        this._types = types
    }
    setDishes(dishes){
        this._dishes = dishes
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(totalCount){
        this._totalCount = totalCount
    }
    get shops(){
        return this._shops
    }
    get types(){
        return this._types
    }
    get dishes() {
        return this._dishes
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }

    get selectedShop(){
        return this._selectedShop
    }
    get selectedType(){
        return this._selectedType
    }
}