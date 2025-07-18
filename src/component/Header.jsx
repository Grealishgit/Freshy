import React from 'react'
import './Header.css'
import image from '../assets/food.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-component'>
                    <h1>Fresh Food Great Taste With</h1>
                    <p>We use only the freshest ingredients to create sushi that is both
                        visually stunning and incredibly flavorful. Every bite is
                        crafted with care, ensuring the perfect balance of taste and texture
                        . Our commitment to quality guarantees a delightful dining experience.
                        Enjoy sushi that looks as good as it tastes
                    </p>
                    <button className='header-btn'>
                        Book A Reservation
                    </button>
                </div>
                <div className='header-component2'>
                    <img className='image' src={image} alt="Freshy Foods Logo" />
                </div>
            </div>
        </div>
    )
}

export default Header