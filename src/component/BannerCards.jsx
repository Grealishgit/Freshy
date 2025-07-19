import React from 'react'
import './BannerCards.css'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'
import preview1 from '../assets/preview1.jpg'
import preview2 from '../assets/preview2.jpg'
import preview3 from '../assets/preview3.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const foods = [
    {
        id: 1,
        title: 'Sushi',
        description: 'Freshly made sushi with a variety of fillings and toppings.',
        image: food1
    },
    {
        id: 2,
        title: 'Ramen',
        description: 'Delicious ramen with rich broth and tender noodles.',
        image: food2
    },
    {
        id: 3,
        title: 'Tempura',
        description: 'Crispy tempura vegetables and seafood, lightly battered.',
        image: food3
    }
]
const preview = [
    {
        id: 1,
        name: 'Salmon Platter',
        image: preview1
    },
    {
        id: 2,
        name: 'Mixed Platter Roll',
        image: preview2
    },
    {
        id: 3,
        name: 'Ala Carte Menu',
        image: preview3
    }
]

const cardInfo = [
    {
        id: 1,
        title: 'Fresh Ingredients',
        description: 'We use only the freshest ingredients in our dishes. From locally sourced vegetables to high-quality seafood.',
        image: image1
    },
    {
        id: 2,
        title: 'Expertly Crafted',
        description: 'Our chefs are experts in their craft, creating dishes that are not only delicious but also visually stunning.',
        image: image2
    },
    {
        id: 3,
        title: 'Customer Favorites',
        description: 'Discover our most loved menu items, crafted with care and attention to detail.',
        image: image3
    }
]

const BannerCards = () => {
    return (
        <div className='banner-cards'>
            <div className='banner'>
                <p>
                    We prioritize freshness and health by using locally sourced ingredients.
                    Our dishes are crafted with care, ensuring that natural flavors shine. Every meal is prepared
                    with a commitment to quality and well-being. Enjoy a pure and wholesome dining experience with us!
                </p>
            </div>
            <div className='banner-content'>
                <h2>Enjoy our expertly crafted suchi combinations,<br /> made just for you.</h2>
                <p>Our sushi is crafted from the freshet ingredients, delivering a <br /> perfect blend of flavor, quality, and visual appeal</p>
            </div>

                <div className='cards'>
                    {foods.map(food => (
                        <div className='card' key={food.id}>
                            <img src={food.image} alt={food.title} />
                            <h3>{food.title}</h3>
                            <p>{food.description}</p>
                        </div>
                    ))}
                </div>
            <div className='banner-content'>
                <h2>Customer Favorites The most Loved<br /> Menu.</h2>
                <p>Our sushi is crafted from the freshet ingredients, delivering a <br /> perfect blend of flavor, quality, and visual appeal</p>
            </div>
            <div className='preview-section'>
                <div className='preview-header'>
                    <img src={preview1} alt="Preview 1" />
                </div>
                <div className='preview-cards'>
                    {preview.map(item => (
                        <div className='preview-card' key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <button className='order-button'>
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <div className='preview-container'>
                <p>
                    Our sushi is crafted from the freshest ingredients.Our  <br />  food is crafted using the freshest ingredients.
                </p>
                <div className='preview-buttons'>
                    <button className='preview-button'></button>
                    <butto className='preview-button'></butto>
                </div>
            </div>
            <div className='banner-content'>
                <h2>Choose The Taste That Suit with Your<br /> Toungue.</h2>
                <p>Our food is made fro the freshest ingredients, resulting in superior sushi with a vibrant
                    appearance and an unbeatable taste guarantee.</p>
            </div>
            <div>
            <div className='image-cards'>
                <button className='prev-btn'>

                </button>
                <button className='next-btn'>

                </button>
                {cardInfo.map(card => (
                    <div className='image-card' key={card.id}>

                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <button className='order-btn'>
                            Ksh 200  Order Now
                        </button>
                    </div>
                ))}
            </div>
            </div>

        </div>
    )
}

export default BannerCards