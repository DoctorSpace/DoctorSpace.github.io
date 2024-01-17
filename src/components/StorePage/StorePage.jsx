import React, {useState, useEffect } from 'react';
import StoreCard from '../StoreCard/StoreCard';
import { useAuth } from '../../hooks/useAuth';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import axios from '../../axios'
import ViewWindow from '../UI/ViewWindow/ViewWindow';
import Selector from '../UI/Selector/Selector';
import ViewImg from '../UI/ViewImg/ViewImg';


const StorePage = () => {

    const [openFilter, setOpenFilter] = useState(true)

    // Всплываюзее окно карточки Поменять на false !!!
    const [modal, setModal] = useState(false)
    // Окно изменения карточки
    const [openPostView, setOpenPostView] = useState(false)
    const [infoPostView, setInfoPostView] = useState('')
    
    // Просмотр карточки
    const [imgPostView, setImgPostView] = useState(false)



    const [category, setCategory] = useState()
    const [filter, setFilter] = useState([])

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [firstLoad, setFirstLoad]  = useState(false)

    const {isAuth} = useAuth();


    const [posts,setPosts] = useState([])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const OpenCloseFilter = () => {
        setOpenFilter(!openFilter)
    }

    const addCard = () => {
        setModal(true)
    }

    const openPost = (post) =>{
        try{
            setInfoPostView(post)
            setOpenPostView(true)

        }catch{
            console.log('Ошибка считывания поста');
        }
    }

    const openView = (post) => {
        try{
            setInfoPostView(post)
            setImgPostView(true)

        }catch{
            console.log('Ошибка считывания поста');
        }
    }

    const cheackPosts = (newPosts) =>{
        setPosts(newPosts)
    }

    const openNewPage = () =>{
        setLimit(limit + 10)
    }



    // Сортировка 
    const sortPosts = (selectorValue) => {
        setFilter(selectorValue)
    }

    // Фильтрация
    const categoryPosts = (e) =>{
        if (e.target.checked === false){
            let NewCategory = category.filter(elem => elem !== e.target.value)
            setCategory(NewCategory)
        } else {
            if (category == undefined){
                setCategory([e.target.value])
            } else{
                setCategory([...category, e.target.value])
            }
            
        }
    }

    // Рандомайзер

    // const shuffle = (arr) => {
    //     for (let i = arr.length - 1; i> 0; i--){
    //         let tmp = arr[i]
    //         let rnd = Math.floor(Math.random() * (i + 1))

    //         arr[i] = arr[rnd]
    //         arr[rnd] =tmp
    //     }
    //     return arr;
    // }


    // Получение данных с сервера
    useEffect(()=>{

        axios.get('/api/posts/', {
            params:{
                '_limit': limit,
                '_page': 1,
                'category': category,
                'filter': filter
            }
        })
            .then(response =>{

                // Количество страниц
                //const countPage = response.headers['x-total-count']

                // Для перетасовки карточек
                // if (!firstLoad){
                //     for (let i = 0; i < response.data.length; i++){
                //         console.log('kurwa')
                //         console.log(shuffle(response.data).join(','))
                //     }
                //     setFirstLoad(true)
                // }

                setPosts(response.data)
            })
            .catch(err =>{
                console.log(err)
            })

    },[limit, filter, category])



    return (
        <div className='store'>
            
            <h2 id='Store'>Товары</h2>

            <div className='store__filter'>
                <button type="button" onClick={OpenCloseFilter}>{openFilter? 'закрыть' : 'Категории'}</button>
                
                <div>
                    <Selector
                        className='store__filter-selector'
                        defaultValue='Сортировка'
                        value={filter}
                        onChange={sortPosts}
                        option={[
                          {value: 'priceUp',    name: 'по возрастанию'},
                          {value: 'priceDown',  name: 'по убыванию'}
                        ]}
                    />
                </div>
            </div>

            <div className={`${openFilter ? 'store__container' : 'store__container-close'}`}>

                <div className={`${openFilter ? 'store__container-categories' : 'store__container-categories-close'}`}>
                    <p>Украшения для тела</p>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="necklace" name="necklace" value="колье" />
                        <label for="necklace">колье</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="earrings" name="earrings" value="серьги" />
                        <label for="earrings">серьги</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="Belts" name="Belts" value="пояса" />
                        <label for="Belts">пояса</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="Tiaras" name="Tiaras" value="диадемы" />
                        <label for="Tiaras">диадемы</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="Handkerchief" name="Handkerchief" value="платок" />
                        <label for="Handkerchief">платок</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="Chopper" name="Handkerchief" value="чокеры" />
                        <label for="Chopper">чокер</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="Logos" name="Logos" value="логотип" />
                        <label for="Logos">логотип</label>
                    </div>

                    <br></br>
                    <p>Браслеты</p>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="SoftBracelet" name="SoftBracelet" value="браслет мягкий" />
                        <label for="SoftBracelet">мягкие</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="HardBracelet" name="HardBracelet" value="браслет жесткий" />
                        <label for="HardBracelet">жесткие</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="FeltBracelet" name="FeltBracelet" value="браслет фетровый" />
                        <label for="FeltBracelet">фетровые</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="BraceletOnTheArm" name="BraceletOnTheArm" value="браслет треугольный" />
                        <label for="BraceletOnTheArm">треугольный</label>
                    </div>
                    <div>
                        <input type="checkbox" onChange={categoryPosts} className="custom-checkbox" id="BraceletOnTheLeg" name="BraceletOnTheLeg" value="браслет на ногу" />
                        <label for="BraceletOnTheLeg">на ногу</label>
                    </div>

                    {isAuth ? <button onClick={addCard} className='store__container-btnAddCard'>Добавить Товар</button> : null}
                </div>

                <div className='store__container-posts'>
                    {posts.length !== 0 
                    ? <StoreCard openSettings={openPost} openView={openView} posts={posts} isAuth={isAuth}/>
                    : <div> Список пуст</div>
                    }
                </div>
            </div>

            <ModalWindow visible={modal} setVisible={setModal} create={createPost} posts={posts}/>
            <ViewWindow  visible={openPostView} setVisible={setOpenPostView} data={infoPostView} update={cheackPosts}/>
            <ViewImg visible={imgPostView} setVisible={setImgPostView} data={infoPostView}/>

            <div className='store__batton'>
                <button className='Btn-CardLoad' onClick={openNewPage}>Загрузить ещё</button>
            </div>

                    
        </div>
    );
};

export default StorePage;