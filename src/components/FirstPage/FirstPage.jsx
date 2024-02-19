import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Link } from 'react-router-dom';
import Photo1 from '../../images/Photo1.jpg';
import Photo2 from '../../images/Photo2.jpg';

const FirstPage = () => {
    return (
        <div className='FirstPag'>
            <h1>Аксессуары ручной работы</h1>
            <div className='FirstPage'>
                <div className='FirstPage__main'>

                    <div className='FirstPage__main-text'>
                        <div className='FirstPage__main-text-h'>
                            <h2>Добро пожаловать в мир восточных танцев и элегантных аксессуаров! Наш магазин - это место, где таинственная красота Востока соединяется с пышными движениями и страстью танца.</h2>
                            <h2>Здесь вы найдете множество колье, браслетов, поясов и других украшений ручной работы. Наши изделия помогут сделать Ваш танец восхитительным и элегантным.</h2>
                        </div>
                    </div>
                </div>

                <div className='FirstPage__img'>
                    <img src={Photo1} className='FirstPage__img-photo1' alt="photo1" />
                    <img src={Photo2} className='FirstPage__img-photo2' alt="photo2" />
                </div>
            </div>

            <div className='FirstPage__main-btn'>
                <a href='#Store' className='Btn-main'>Посмотреть товары</a>
                <Link to="/Contact" className='Btn-second'>Связаться</Link>
            </div>
            <Analytics />
        </div>
    );
};

export default FirstPage;
