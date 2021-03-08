import React, { Component, useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider(props) {

    const [Foods, setFood] = useState([]);

    const addToCart = (Food) => {
        const updatedCart = [...Foods];
        const updatedItemIndex = updatedCart.findIndex(item => item._id === Food._id);

        if (updatedItemIndex < 0) updatedCart.push({...Food, quantity: 1});
        else {
            const updatedItem = {...updatedCart[updatedItemIndex]};
            updatedItem.quantity++;
            updatedCart[updatedItemIndex] = updatedItem;
        }
        setFood(updatedCart);  
    };

    const increaseQuantity = () => {

    };

    const decreaseQuantity = () => {

    };

    return <CartContext.Provider value={{Foods: Foods, addToCart: addToCart}}>
        {props.children}
    </CartContext.Provider>;
}