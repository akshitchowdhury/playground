import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationPage = () => {
    const [taskName,setTaskName] = useState('')
    const[taskList,setTaskList] = useState([])
    const[searchText,setSearchText] = useState("")
    const[filteredTasks,setFilteredTasks] = useState([])


    const handleAddTask = (event)=>{
        event.preventDefault();
        setTaskList([...taskList,taskName])
        setTaskName("")
    }

    const handleDeletion = (currTask)=>{
        console.log("Deleted task")
        setTaskList(taskList.filter((task)=> task!==currTask))
    }
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("auth")
        navigate('/')
    }

    useEffect(()=>{
        setFilteredTasks(taskList.filter((task)=>task.toLowerCase().includes(searchText.toLowerCase())))
    },[taskList,searchText])
  return (
    <div>
    <button onClick={handleLogout}>Log Out</button>
    <input onChange={(e)=>setTaskName(e.target.value)} value={taskName} type='text' placeholder='Enter task name'/>
    <button onClick={(e)=>handleAddTask(e)}>Add task</button>
      {
        filteredTasks.map((task,index)=>(
            <>
                <p key={index}>{task}</p>
                <button onClick={()=> handleDeletion(task)}>Delete task</button>
            </>
        ))
      }

      <input placeholder='searchBar'value={searchText} onChange={(e)=> {setSearchText(e.target.value)
      }}/>
    </div>
  )
}

export default ApplicationPage
