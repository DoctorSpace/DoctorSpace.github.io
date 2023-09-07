import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HeaderZero from '../HeaderZero/HeaderZero';
import HorizontalRule from '../UI/HorizontalRule/HorizontalRule';
import { setUserAuth } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';



const AuthorizationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [user, setUser] = useState({email:'', password: ''})
    const [userOnline, setUserOnline] = useState('')

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };


    const Authorization = (e) =>{
        e.preventDefault();
        // Google
        let auth = getAuth();

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userDate) => {
                // Signed in 
                dispatch(setUserAuth({
                    email: userDate.user.email, 
                    id: userDate.user.uid,
                    token: userDate.user.accessToken,
                }))


                axios.patch(`/api/token/64edd86fc7bfb004831a87cc`,{
                	"token": userDate.user.accessToken
                })
                    .then(res =>{
                        setUserOnline('Успешный вход')
                        navigate('/');
                    })
                    .catch(err =>{
                        console.log('сюда');
                        console.log(err)
                    })

        })
        .catch((error) => {
            setUserOnline('Пользователь не найден')
            console.log('Пользователь не найден');
      });
    }


    return (
        <div>
            <HeaderZero />
            <HorizontalRule />
            
            <h2>Авторизация</h2>

            <form>
                <div className='Authorization'>
                    <div>
                        <p>Введите логин:</p>
                        <input value={user.email} type='email' onChange={handleChange} name="email" placeholder='@mail'></input>
                    </div>
                    <div>
                        <p>Введите пароль:</p>
                        <input value={user.password} type='password' onChange={handleChange} name="password" placeholder='password'></input>
                    </div>
                    <button onClick={Authorization}>Войти</button>
                    <p className='Authorization__message'>{userOnline}</p>
                    <p className='Authorization__statement'>*Вход только для администрации</p>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationPage;