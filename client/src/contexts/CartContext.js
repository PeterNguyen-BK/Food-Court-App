import React, { useState } from 'react';

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

    const increaseQuantity = (Food) => {
        const updatedQuantity = [...Foods];
        const updatedItemIndex = updatedQuantity.findIndex(item => item._id === Food._id);
        const updatedItem = {...updatedQuantity[updatedItemIndex]};
        updatedItem.quantity++;
        updatedQuantity[updatedItemIndex] = updatedItem;
        setFood(updatedQuantity);
    };

    const decreaseQuantity = (Food) => {
        const updatedQuantity = [...Foods];
        const updatedItemIndex = updatedQuantity.findIndex(item => item._id === Food._id);
        const updatedItem = {...updatedQuantity[updatedItemIndex]};
        if (updatedItem.quantity > 1){
            updatedItem.quantity--;
            updatedQuantity[updatedItemIndex] = updatedItem;
            setFood(updatedQuantity);
        }
    };

    const removeItem = (Food) => {
        const removeItem = [...Foods];
        const updatedItemIndex = removeItem.findIndex(item => item._id === Food._id);
        console.log(removeItem.length);
        if (removeItem.length > 1) {  
            const updatedCart = removeItem.splice(updatedItemIndex - 1, 1);
            setFood(updatedCart);
        }else {
            setFood([]);
        }
    };

    return <CartContext.Provider value={{Foods: Foods, addToCart: addToCart, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, removeItem: removeItem}}>
        {props.children}
    </CartContext.Provider>;
}