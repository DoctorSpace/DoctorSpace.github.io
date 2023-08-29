import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Phone from '../../images/Phone.svg';
import PersonEnter from '../../images/PersonEnter.svg';
import PersonExit from '../../images/PersonExit.svg';
import { useAuth } from '../../hooks/useAuth';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { removeUserAuth } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isAuth} = useAuth();
    const [toogle, setToogle] = useState(false);

    const ToogleChange = () =>{
        setToogle(!toogle)
    }

    const sign0Out = () =>{
        let auth = getAuth();

        signOut(auth).then(() => {
          console.log('вышли');

          dispatch(removeUserAuth())
          navigate("/");

        }).catch((error) => {
            console.log(error);
        });
    }

    //'header-vision'

    return (
            <header>
                <div className='header__number'>
                    <img src={Phone} alt="phone" />
                    <p>8 900 800 40 50</p>
                </div>


                <Link to='/' style={{ textDecoration: 'none' , color: 'black'}}>
                    <div className='header__name' id='LogoName'>
                        <h1>Айседора</h1>
                        <p>Интернет магазин для восточных танцев</p>
                    </div>
                </Link>

                <div className='header__nav'>

                    <div className='header__nav-hamburger'> 
                        <input id="toggle" type="checkbox" checked={toogle} onChange={(e) => ToogleChange(e)}></input>

                        <label for="toggle" className="hamburger">
                          <div className="top-bun"></div>
                          <div className="meat"></div>
                          <div className="bottom-bun"></div>
                        </label>
                    </div>

                    <div className={`${toogle ? 'nav' : 'hide'}`}>
                        <div className='nav-wrapper'>
                            <nav>
                                <a href="#Store" onClick={ToogleChange}><li>Товары</li></a>
                                <a href="#" onClick={ToogleChange}><li>Доставка</li></a>
                                <a href="#" onClick={ToogleChange}><li>Контакты</li></a>
                                <Link to={isAuth ? '/' : '/Authorization'}><li onClick={isAuth ? sign0Out : null}> <img src={isAuth ? PersonExit : PersonEnter} alt="Person" /></li> </Link>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
    );
};

export default Header;