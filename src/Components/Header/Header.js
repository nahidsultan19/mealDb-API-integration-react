import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="navbar">
                <a href="/logo">MealDB</a>
                <div className="navbar-container">
                    <a href="/home">Home</a>
                    <a href="/meals">Meals</a>
                    <a href="/about">About</a>
                    <a href="/service">Service</a>
                </div>
            </div>
        </div>
    );
};

export default Header;