import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {Context} from "../index";


const TotalBar = () => {
    const {cart}= useContext(Context)
    let sum=0
    cart.cartDishes.map(dish => sum=sum+dish.price)

    return (
        <Container>
            <div>Total:</div>
            <div className='align-self-end'>{sum}  $</div>
        </Container>
    );
};

export default TotalBar;