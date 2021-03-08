import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css'
import { Card } from 'react-bootstrap';
import { VscAdd } from "react-icons/vsc";
import { VscRemove } from "react-icons/vsc";

export default function Cart() {
    const {Foods, addToCart} = useContext(CartContext);
    const tempArr = Foods.map(Food => JSON.stringify(Food));
    const filteredFoods = [...new Set(tempArr)];
    const listFoods = filteredFoods.map(Food => JSON.parse(Food));
    
    return <div>
            <h2 className="cart-title">Your Cart</h2>
            <div className="order-detail">
                <div className="list-detail">
                    {listFoods.map(Food => (
                        <Card className="ml-5 mr-3 mt-3 bg-light" key={Food._id}>
                            <Card.Body>
                                <div className="list-foods">
                                    <div className="food-image">
                                        <img src={Food.image} />
                                    </div>
                                    <div className="food-info">
                                        <p className="food-name"> {Food.name} </p>
                                        <p className="food-price"> { Food.price * Food.quantity } VND </p>
                                        <div className="quantity-food">
                                            <button> <VscAdd className="icon"/> </button>
                                            <span className="food-amount"> { Food.quantity } </span>
                                            <button> <VscRemove className="icon"/> </button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div className="total-price">
                    <Card style={{ width: '18rem' }} className="bg-light">
                        <Card.Body>
                            <p>Subtotal ({listFoods.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)} Foods): {
                            listFoods.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price, 0)
                            } VND</p>
                            <hr/>
                            <p>With discount: {
                            listFoods.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price * (1 - currentValue.discount), 0)
                            } VND</p>
                            <Card.Link href="#">Checkout</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div> 
    </div>
}