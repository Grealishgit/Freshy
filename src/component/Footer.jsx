import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-info">
                    <p className='footer-text'>Freshy<span className='logo'>Foods</span> </p>
                    <div className='footer-texts'>
                        <p className='footer-p'>Nairobi, Kenya</p>
                        <p className='footer-p'>0742636835</p>
                        <p className='footer-p'>freshyfoods@gmail.com</p>
                    </div>
                </div>

                <div className="footer-links">
                    <p className='footer-text'>Service</p>
                    <div className='footer-texts'>
                        <p className='footer-p'>How it works</p>
                        <p className='footer-p'>Home Delivery</p>
                        <p className='footer-p'>Products</p>
                        <p className='footer-p'>Menu</p>
                    </div>
                </div>

                <div className="footer-links">
                    <p className='footer-text'>Company</p>
                    <div className='footer-texts'>
                        <p className='footer-p'>About</p>
                        <p className='footer-p'>News</p>
                        <p className='footer-p'>Our Trusted partner</p>
                        <p className='footer-p'>New userFRQ</p>
                    </div>
                </div>

                <div className="footer-links">
                    <p className='footer-text'>Supports</p>
                    <div className='footer-texts'>
                        <p className='footer-p'>Help Center</p>
                        <p className='footer-p'>Feedback</p>
                        <p className='footer-p'>Contact Us</p>
                        <p className='footer-p'>Terms Conditions</p>
                    </div>
                </div>


            </footer>
            <div className='border-break' />
            <div className='footer-bottom'>
                <p className='footer-copyright'>© 2025 Freshy Foods. All rights reserved.</p>
                <div>
                    <p className='footer-copyright'>Made with ❤️ by Hunter</p>
                </div>
                <div className='footer-bottom-links'>
                    <p className='footer-p'>Privacy</p>
                    <p className='footer-p'>Security</p>
                    <p className='footer-p'>Terms</p>
                </div>
            </div>
        </div>
    )
}

export default Footer