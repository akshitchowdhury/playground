import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../AuthPage/Login';

const ProtectedRoute = () => {
    let isLoggedIn = localStorage.isAuthenticated;
  return (
    <div>
    {
        isLoggedIn ? <Outlet/> : <Navigate to="/"/>
    }
      
      
    </div>
  )
}

export default ProtectedRoute
