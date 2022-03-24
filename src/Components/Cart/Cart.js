import React from 'react';

const Cart = ({ item }) => {
    return (
        <div className='cart'>
            <p>Code: {item.idMeal}</p>
            <p><small>{item.strMeal}</small></p>
        </div>
    );
};

export default Cart;