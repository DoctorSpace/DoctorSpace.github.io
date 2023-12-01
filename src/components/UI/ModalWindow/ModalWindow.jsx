import React, { useState, useRef } from 'react';
import axios from '../../../axios'
import Decoration from '../../../images/Decoration.svg';
import { getStorage,  uploadBytes, ref , getDownloadURL} from "firebase/storage";



const ModalWindow = ({visible, setVisible, posts, create}) => {


    const rootClasses = ['MyModal']
    const takeImg = useRef();
    const takeTitle = useRef();
    const takeCategory = useRef();
    const takePrice = useRef();


    const [urlTakeImg, setUrlTakeImg] = useState(false)


    function handleChange() {
        try{
            setUrlTakeImg(false)

            // только для отображения (способ 1)
            const reader = new FileReader()
            reader.onload = ev => {
                // путь на картинку base64
                setUrlTakeImg(ev.target.result)
            }
            reader.readAsDataURL(takeImg.current.files[0])
            // только для отображения (способ 2)
            // setUrlTakeImg(window.URL.createObjectURL(takeImg.current.files[0]))

        } catch (e) {console.log(e, "Фотография не выбрана" );
        }
    }

    if (visible) {
        rootClasses.push('active')
    }



    // Загрузить на Store
    const sendGoogleBase = (e) => {
        e.preventDefault();

        const title = takeTitle.current.value
        const category = takeCategory.current.value
        const price = takePrice.current.value
        let imageUrl = ''

        const file = takeImg.current.files[0]

        if (urlTakeImg) {

            let getPictureUrl = new Promise ((resolve, reject)=>{

                const storage = getStorage();
                const storageRef = ref(storage, file.name)
    
                uploadBytes(storageRef, file)
                .then(snapshot => {
                    console.log('картинка загружена на сервер')
                    getDownloadURL(storageRef)
                        .then(url => {resolve(url)})
                        .catch(error => {reject(error)})
                    })
                .catch(error => {reject(error)});
            })


            getPictureUrl
            .then((date)=>{
                imageUrl = date
                axios.post('/api/posts',{
                    "title": title,
                    "category": category,
                    "price": price,
                    "url_img": imageUrl
                }).then(function (response) {
                    create(response.data)
                  })
                  .catch(function (error) {
                    console.log(error);
                  })

                setUrlTakeImg(false)
                setVisible(false)
            })

        } else {console.log('выберите фотографию')}
    }



    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className='ModalWindow__content' onClick={(e)=> e.stopPropagation()}>
                    <h2>Добавить карточку</h2>

                    {/* img */}
                    <label id='dropFile' for="image_uploads" className='ModalWindow__content-img'>
                        <img src={urlTakeImg ? urlTakeImg : Decoration}/>
                    </label>
                    <button className='ModalWindow__content-buttonClose' onClick={()=> setVisible(false)}>←</button>
                    <input ref={takeImg} onChange={handleChange} id="image_uploads" className='ModalWindow__content-img-input' type="file" name="photo" accept="image/jpeg,image/png">
                    </input>

                    {urlTakeImg ? null : <h2>Выберите фотографию</h2>}

                    
                    <div className='ModalWindow__content-divider'></div>

                    <form>
                        <div className='ModalWindow__content-titel'>
                            <p>Название:</p>
                            <input ref={takeTitle} value={visible ? null : ''} type='text'></input>
                        </div>

                        <div className='ModalWindow__content-price'>
                            <p>Цена:</p>
                            <input ref={takePrice} value={visible ? null : ''} type='number'></input>
                        </div>

                        <div className='ModalWindow__content-category'>
                            <p>Категория:</p>
                            <input ref={takeCategory} value={visible ? null : ''} type="text" list="item"></input>
                            <datalist id="item">
                                {/* Изделия для головы */}
                                <option value="диадемы"></option>
                                <option value="украшение на волосы"></option>

                                {/* Украшения для тела */}
                                <option value="колье"></option>
                            	<option value="серьги"></option>
                            	<option value="пояса"></option>
                                <option value="платок"></option>
                                <option value="чокеры"></option>
                                <option value="логотип"></option>
                                {/* браслет */}
                            	<option value="браслет мягкий"></option>
                            	<option value="браслет жесткий"></option>
                            	<option value="браслет фетровый"></option>
                                <option value="браслет треугольный"></option>
                                <option value="браслет на ногу"></option>
                            </datalist>
                        </div>

                        <button onClick={sendGoogleBase}> Добавить карточку </button>
                    </form>
             </div>
        </div>
    );
};

export default ModalWindow;
