import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div>
        <div className='banner-content'>
            <h2>What Our Happy Customers Say<br /> About Us.</h2>
            <p>Our food is made from the freshest ingredients, resulting in superior sushi with<br /> a vibrant appearnace and an unbeatable taste guarantee.</p>
            </div>
            <div className="customer-section">
                <div className="customer-header">
                    <div className="customer-container">
                        <img className='customs' src="https://randomuser.me/api/portraits/women/32.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs1' src="https://randomuser.me/api/portraits/men/45.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs2' src="https://randomuser.me/api/portraits/women/28.jpg"
                            alt="image" />
                    </div>
                    <div className="customer-container">
                        <img className='customs3' src="https://randomuser.me/api/portraits/men/75.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs4' src="https://randomuser.me/api/portraits/women/60.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs3' src="https://randomuser.me/api/portraits/men/50.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs2' src="https://randomuser.me/api/portraits/women/50.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs1' src="https://randomuser.me/api/portraits/women/30.jpg" alt="image"
                        />
                    </div>
                    <div className="customer-container">
                        <img className='customs' src="https://randomuser.me/api/portraits/men/10.jpg" alt="image"
                        />
                    </div>

                </div>
            </div>
            <div className='testimonial-content'>
                <div className='testimonial-header'>
                    <p>
                        Do yourself a fovor and visit this fantastic restaurant in the heart of Nairobi. The service is <br />
                        top-notch, and the staff genuinely cares about your experience. Every dish we <br />
                        tried was asbolutely delicious, melting in our mouths. The flavors were rich <br />
                        and unforgettable. It was, without a doubt, the best meal we had during our <br />
                        stay. The ambience added to the perfect dining experience. Highly <br />
                        recommeded!.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials