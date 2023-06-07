import React,{useContext, useState} from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import  Cart from '../Assets/Cart.png'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import trash from "../Assets/trash.png"


const CartItem = ({dish}) => {
    const {store, cart} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textStyle = {
        position: 'fixed',
        left: mousePosition.x + 10,
        top: mousePosition.y + 10,
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '5px',
        display: isHovered ? 'block' : 'none'
    };

    let shopName
    store.shops.map(shop=>{if(shop.id === dish.shopNameId)
    {shopName = shop.name}})

    return (
        <Col md={3} style={{cursor:'default'}}>
            <Card style={{width:160}} className='mb-3 mt-1' border='light'>
                <Image width={160} height={160} src ={process.env.REACT_APP_API_URL+dish.img} />
                <div className=' mt-2 align-self-end'>{dish.price}  $</div>
                <div className='text-black-50 m-lg-1'>
                    {shopName}
                </div>
                <div className='d-flex justify-content-between p-2'>
                    <div>{dish.name}</div>
                    <Image
                        width={18}
                        height={18}
                        src={trash}
                        style={{cursor:"pointer"}}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>cart.removeFromCart(dish.id)}
                    />{isHovered && <span style={textStyle}>Remove from Cart</span>}

                </div>

            </Card>
        </Col>
    );
};

export default CartItem;