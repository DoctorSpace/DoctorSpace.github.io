import React from "react";

export const cheakAuth = () => {
  // axios.get('/api/token/64edd86fc7bfb004831a87cc')
  // .then(response =>{
  //
  //
  //
  // bdToken = response.data.token
  // const auth = (bdToken == localStorage.getItem('token') ? true : false)
  //
  // return{
  // isAuth: auth,
  // email,
  // token,
  // id,
  // }
  // })
  // .catch(err =>{
  // console.log(err)
  // })

  return true;

  return bdToken == localStorage.getItem("token") ? true : false;
};
