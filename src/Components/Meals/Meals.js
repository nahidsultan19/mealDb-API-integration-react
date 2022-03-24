import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';
import '../../style.css';


const Meals = () => {
    const [meals, setMeals] = useState([])
    // console.log(meals)
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);

    }

    return (

        <div className='meals-container'>
            <div className='meals' >
                {
                    Object.values(meals).map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
                }
            </div>
            <div className="order-summary">
                <h4>Cart Summary</h4>
                <p>Selected Items: {cart.length}</p>
                {cart.map(item => <Cart key={item.idMeal} item={item}></Cart>)}

            </div>
        </div>
    );
};

export default Meals;