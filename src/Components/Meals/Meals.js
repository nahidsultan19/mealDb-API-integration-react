import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';


const Meals = () => {
    const [meals, setMeals] = useState([])
    console.log(meals)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (

        <div className='meals-container'>
            <div className='meals' >
                {
                    Object.values(meals).map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Meals;