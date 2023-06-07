import {$host} from "./index";

export const fetchTypes = async ()=>{
    const {data} = await $host.get('api/type')

    return data
}
export const fetchShops = async ()=>{
    const {data} = await $host.get('api/shop')

    return data
}

export const fetchDishes = async (shopNameId, typeNameId, page)=>{
    const {data} = await $host.get('api/dish',{params:{
        shopNameId,typeNameId,page
        }})

    return data
}