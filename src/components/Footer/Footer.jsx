import React from 'react';
import Phone from '../../images/Phone.svg';
import WhatsApp from '../../images/WhatsApp.svg';
import Instagram from '../../images/Instagram.svg';

const Footer = () => {

    const sayHello = () =>{
        console.log('hello');
    }

    return (
        <footer>
            <div className='Footer__logo'>
                <a href="#LogoName"><p>Айседора</p></a>
            </div>
            <div className='Footer__contact'>
                <div className='Footer__contact-phone'>
                    <img src={Phone} alt='phone'/>
                    <p>7 999 800 50 40</p>
                </div>
                <div className='Footer__contact-messengers'>
                    <a href="#"><img src={WhatsApp} className='Footer__contact-messengers-icon' alt='WhatsApp'/></a>
                    <a href="#"><img src={Instagram} onClick={sayHello} className='Footer__contact-messengers-icon' alt='Instagram'/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;