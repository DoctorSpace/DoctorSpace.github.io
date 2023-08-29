import React from 'react';

const Card = (props) => {

    

    return (
        <div className='card'>

            <img src={props.post.url_img} onClick={() => props.openView(props.post)} alt='print'/>

            
            <div className={props.post.price? 'card-price': 'card-price none'}>
                <p>{props.post.price}Р</p>
            </div>


            {props.isAuth ? 
            <div className='card-settings'>
                <button onClick={() => props.openSettings(props.post)}>⚙️</button>
            </div>
            : null}

            <p>{props.post.title}</p>
        </div> 
    );
};

export default Card;