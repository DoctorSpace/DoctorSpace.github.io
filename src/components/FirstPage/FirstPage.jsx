import React from 'react';
import Photo1 from '../../images/Photo1.jpg';
import Photo2 from '../../images/Photo2.jpg';

const FirstPage = () => {

    const addNewPost = () =>{
        console.log('hi');
    }

    return (
        <div className='FirstPag'>
            <h1>Аксессуары ручной работы</h1>
            <div className='FirstPage'>
                <div className='FirstPage__main'>

                    <div className='FirstPage__main-text'>
                        <div className='FirstPage__main-text-p'>
                            <p1>Наш магазин предлагает разнообразные аксессуары, которые помогут вам совершенствовать свои танцевальные навыки и придать вашим выступлениям изысканность.</p1>
                            <p1>Здесь вы найдете множество колец, браслетов и многое другое – все, что нужно, чтобы сделать ваш танец восхитительным и элегантным.</p1>
                        </div>
                    </div>
                </div>

                <div className='FirstPage__img'>
                    <img src={Photo1} className='FirstPage__img-photo1' alt="photo1" />
                    <img src={Photo2} className='FirstPage__img-photo2' alt="photo2" />
                </div>
            </div>

            <div className='FirstPage__main-btn'>
                <button className='Btn-main' onClick={addNewPost}>Посмотреть товары</button>
                <button className='Btn-second' onClick={addNewPost}>Связаться</button>
            </div>

        </div>
    );
};

export default FirstPage;