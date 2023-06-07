import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ShopBar from "../components/ShopBar";
import TypeBar from "../components/TypeBar"
import DishList from "../components/DishList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDishes, fetchTypes, fetchShops} from "../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {store} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>store.setTypes(data))
        fetchShops().then(data=>store.setShops(data))
        fetchDishes().then(data=> {
            store.setDishes(data.rows)
            store.setTotalCount(data.count)
        })
    })

    useEffect(()=>{
        fetchDishes(store.selectedShop.id, store.selectedType.id,store.page).then(data=> {
            store.setDishes(data.rows)
            store.setTotalCount(data.count)
        })
    },[store.page,store.selectedShop, store.selectedType])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={2} className='mt-5'>
                    <ShopBar/>
                </Col>
                <Col md={9}>
                    <TypeBar/>
                    <DishList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;