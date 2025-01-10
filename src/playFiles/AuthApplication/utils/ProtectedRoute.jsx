import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import Login from '../AuthPage/Login';

const ProtectedRoute = () => {

    let isLoggedIn = localStorage.getItem("auth");
    const navigate = useNavigate()
  return (
    <div>
    {
        isLoggedIn ? <Outlet/> : <Login/>
    }
      
      
    </div>
  )
}

export default ProtectedRoute
