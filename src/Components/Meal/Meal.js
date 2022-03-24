import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 200)}</p>
            </div>
            <div className='cart-btn'>
                <p>Add to Cart</p>
            </div>
        </div>
    );
};

export default Meal;