import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";
import {Context} from "../index";
import CartItem from "./CartItem";

const CartList = observer(() => {
    const {cart} = useContext(Context)

    return (
        <Container>
            {cart.cartDishes.map(dish=>
                <CartItem key={dish.id} dish={dish}/>
            )}
        </Container>
    );
});

export default CartList;