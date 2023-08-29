import React from 'react';
import { Link } from 'react-router-dom'
import Arrow from '../../images/Arrow.svg';

const HeaderZero = () => {
    return (
        <header>
            <div><Link to='/'> <img src={Arrow} alt="Arrow" /> </Link></div>
            <Link to='/' style={{ textDecoration: 'none' , color: 'black'}}>
                <div className='header__name'>
                    <h1>Айседора</h1>
                    <p>Интернет магазин для восточных танцев</p>
                </div>
            </Link>
        </header>
    );
};

export default HeaderZero;