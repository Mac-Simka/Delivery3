import React, {useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const ShopBar =  observer(() =>{
    const {store} = useContext(Context)
    return (
        <ListGroup as="ul" bg='white' style={{cursor:'default'}}>
            {store.shops.map(shop =>
                <ListGroup.Item
                    onClick={()=> {
                        store.selectedShop.id === shop.id ?
                        store.setSelectedShop({}):
                            store.setSelectedShop(shop)
                    }}
                    active = {shop.id === store.selectedShop.id}
                    style={{cursor:'pointer'}}
                    key ={shop.id}>
                    {shop.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default ShopBar;