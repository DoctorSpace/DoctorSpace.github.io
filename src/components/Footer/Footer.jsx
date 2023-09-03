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
                    <a href='tel:+79998887766'><p>+7(961)404 14-62</p></a>
                </div>
                <div className='Footer__contact-messengers'>
                    <a href="https://wa.me/79614041462"><img src={WhatsApp} target="_blank" className='Footer__contact-messengers-icon' alt='WhatsApp'/></a>
                    <a href="https://www.instagram.com/isadora_visage/"><img src={Instagram} target="_blank" onClick={sayHello} className='Footer__contact-messengers-icon' alt='Instagram'/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;