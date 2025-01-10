import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmission = (event)=>{
            event.preventDefault();
            console.log("Log in clicked")
            if(username==="akshit" && password==="123"){
                alert("Log in succesful")
                setUsername("")
                setPassword("")
                
                // setAuthKey(username+password)
                localStorage.setItem("auth",username+password)
                console.log(localStorage.isAuthenticated)
                navigate('/app')
                
            }
            else{
                alert("Inavlid credentials")
            }
    }
  return (
    <div className='h-[400px] w-[500px] m-28 mx-[400px]   border-[1pt] border-red-500'>
      <form className='flex flex-col gap-3 items-center my-[100px]   justify-evenly' onSubmit={(e)=>handleSubmission(e)}>
      <input onChange={(e)=>setUsername(e.target.value)} value={username} className='border-[1pt] border-x-black p-2' type='text' placeholder='Enter username'/>
      <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border-[1pt] border-x-black p-2' type='password' placeholder='Enter password'/>
      <button type='submit' className='bg-amber-500 p-2 text-white rounded-sm'>Log in</button>
      </form>
    </div>
  )
}

export default Login
