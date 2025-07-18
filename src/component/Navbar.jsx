import React from 'react'
import './Navbar.css'
import 'remixicon/fonts/remixicon.css'



const Navbar = () => {

    return (
        <nav className="navbar">
            <div class="logo">
                <p>Freshy<span>Foods</span> </p>
            </div>
            <div>
                <ul class="navlinks">
                    <li class="navlink">
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#home">Menu</a>
                    </li>
                    <li>
                        <a href="#home">Our Services</a>
                    </li>
                    <li>
                        <a href="#home">About</a>
                    </li>
                    <li>
                        <a href="#home">Contact</a>
                        <i class="ri-arrow-up-s-line"></i>
                    </li>
                </ul>
            </div>
            <div class="buttons">
                <button class="btn">Order Now</button>
                <button className='btn'>
                    Sign Up
                </button>
            </div>

        </nav>
    )
}

export default Navbar