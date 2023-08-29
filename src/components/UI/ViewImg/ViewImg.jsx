import React from 'react';

const ViewImg = ({visible, setVisible, data }) => {

    const rootClasses = ['ViewImg']

    if (visible) {
        rootClasses.push('active')
    }


    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className='ViewImg__content' onClick={(e)=> e.stopPropagation()}>

                    <div id='dropFile' for="image_uploads" className='ViewImg__content-img'>
                        <img src={data.url_img}/>
                    </div>

                    <button className='ViewImg__content-buttonClose' onClick={()=> setVisible(false)}>←</button>

                    <p>{data.title}</p>

                    <button className='ViewImg__content-button'>Связаться</button>

             </div>
        </div>
    );
};

export default ViewImg;