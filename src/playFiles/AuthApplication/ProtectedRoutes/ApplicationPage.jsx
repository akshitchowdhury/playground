import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationPage = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("auth")
        navigate('/')
    }
  return (
    <div>
      Succesfully logged in
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default ApplicationPage
