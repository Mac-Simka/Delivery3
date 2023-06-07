import {useContext} from "react";
import {Context} from "../index";
import MyModal from "./Modal";

const SubmitOrder =(name,email,phone,address)=>{
    const {cart}=useContext(Context)
    // const shopId =cart.cartDishes[0].shopNameId
    // cart.cartDishes.map(dishes=>dishes.shopNameId!==shopId)

    !name || !email || !phone || !address ?
        MyModal():
    cart.setEmptyCart()

    return
}

export default SubmitOrder