import React from "react";

export const cheakAuth = () => {

    axios.get('/token/64edd86fc7bfb004831a87cc')
        .then(response =>{

            bdToken = response.data.token
            const auth = (bdToken == localStorage.getItem('token') ? true : false)

            return{
                isAuth: auth,
                email,
                token,
                id,
            }
        })
        .catch(err =>{
            console.log(err)
        })

    return (bdToken == localStorage.getItem('token') ? true : false)
}