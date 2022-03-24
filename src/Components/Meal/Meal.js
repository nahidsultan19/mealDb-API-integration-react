import React from 'react';
import './Meal.css';
import '../../style.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Meal = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    const { handleAddToCart, meal } = props;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 200)}</p>
            </div>
            <div onClick={() => handleAddToCart(meal)} className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Meal;