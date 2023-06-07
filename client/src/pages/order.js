import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import User from '../components/User'
import {Context} from "../index";
import {useContext} from "react";
import CartList from "../components/CartList";
import TotalBar from "../components/TotalBar";
import {observer} from "mobx-react-lite";

const Order = observer(() => {
    const {cart} = useContext(Context)
    console.log(cart.cartDishes)

    return (
        <Container>
            <Row className="mt-3">
                <Col md={4} className='mt-5'>
                    <User/>
                </Col>
                <Col md={8}>
                    <CartList/>
                    <TotalBar/>
                </Col>
            </Row>
        </Container>
    );
});

export default Order;