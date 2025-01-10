import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationPage = () => {
    const [taskName,setTaskName] = useState('')
    const[taskList,setTaskList] = useState([])
    const handleAddTask = (event)=>{
        event.preventDefault();
        setTaskList([...taskList,taskName])
    }
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("auth")
        navigate('/')
    }
  return (
    <div>
    <button onClick={handleLogout}>Log Out</button>
    <input onChange={(e)=>setTaskName(e.target.value)} value={taskName} type='text' placeholder='Enter task name'/>
    <button onClick={(e)=>handleAddTask(e)}>Add task</button>
      {
        taskList.map((task,index)=>(
            <>
                <p key={index}>{task}</p>
            </>
        ))
      }

      
    </div>
  )
}

export default ApplicationPage
