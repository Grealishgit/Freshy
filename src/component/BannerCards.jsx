import React from 'react'
import './BannerCards.css'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

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
            <div>
                <div className='cards'>
                    {foods.map(food => (
                        <div className='card' key={food.id}>
                            <img src={food.image} alt={food.title} />
                            <h3>{food.title}</h3>
                            <p>{food.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BannerCards