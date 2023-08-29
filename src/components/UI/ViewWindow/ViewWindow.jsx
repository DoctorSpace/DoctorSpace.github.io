import React, {useRef }  from 'react';
import axios from '../../../axios'

const ViewWindow = ({visible, setVisible, data, update}) => {

    const rootClasses = ['ViewWindow']


    const takeTitle = useRef();
    const takeCategory = useRef();
    const takePrice = useRef();


    if (visible) {
        rootClasses.push('active')
    }

    // Изменить пост
    function changeCardInfo(e){
        e.preventDefault();

        let newTitle    = (takeTitle.current.value      !== takeTitle.current.placeholder     && takeTitle.current.value ? takeTitle.current.value    : data.title   )
        let newCategory = (takeCategory.current.value   !== takeCategory.current.placeholder  && takeCategory.current.value ? takeCategory.current.value : data.category )
        let newPrice    = (takePrice.current.value      !== takePrice.current.placeholder     && takePrice.current.value ? takePrice.current.value    : data.price   )

        axios.patch(`/posts/${data._id}`,{
            "title": newTitle,
            "category": newCategory,
            "price": newPrice,
            "url_img": data.url_img
        })
        .then(data =>{
            axios.get('/posts')
                .then(data =>{
                    update(data.data)
                    setVisible(false)
                })
                .catch(err =>{
                    console.log(err)
                })
        })
    }

    // Удалить пост
    function deleteCardInfo(e){
        e.preventDefault();

        axios.delete(`/posts/${data._id}`)
        .then(data =>{

            axios.get('/posts')
                .then(data =>{
                    update(data.data)
                    setVisible(false)
                })
                .catch(err =>{
                    console.log(err)
                })

        })
        .catch(err =>{
            console.log(err)
        })

        
    }


    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className='ViewWindow__content' onClick={(e)=> e.stopPropagation()}>
                    <h2>Изменить карточку </h2>

                    <div id='dropFile' for="image_uploads" className='ViewWindow__content-img'>
                        <img src={data.url_img}/>
                    </div>

                    <button className='ViewWindow__content-buttonClose' onClick={()=> setVisible(false)}>←</button>

                    
                    <div className='ViewWindow__content-divider'></div>

                    <form>
                        <div className='ViewWindow__content-titel'>
                            <p>Название:</p>
                            <input ref={takeTitle} value={visible ? null : ''} placeholder={data.title} type='text'></input>
                        </div>

                        <div className='ViewWindow__content-price'>
                            <p>Цена:</p>
                            <input ref={takePrice} value={visible ? null : ''}  placeholder={data.price} type='number'></input>
                        </div>

                        <div className='ViewWindow__content-category'>
                            <p>Категория:</p>
                            <input ref={takeCategory} value={visible ? null : ''} placeholder={data.category}  type="text" list="item"></input>
                            <datalist id="item">
                            	<option value="браслеты"></option>
                            	<option value="колье"></option>
                            	<option value="серьги"></option>
                            	<option value="кольца"></option>
                                <option value="другое"></option>
                            </datalist>
                        </div>

                        <button onClick={deleteCardInfo} id='btnDeleteCard'> Удалить карточку </button>
                        <button onClick={changeCardInfo} id='btnChangeCard'> Изменить карточку </button>
                    </form>
             </div>
        </div>
    );
};

export default ViewWindow;