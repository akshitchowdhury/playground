import React, { useState } from 'react'

const Todo = () => {
    const[taskList,setTaskList] = useState([])

    const[taskName,setTaskName] = useState('')
    const handleSubmission = (event)=>{
            event.preventDefault();
            console.log("New task added")
            
            setTaskList([...taskList,taskName])    
            console.log(taskList) 
            setTaskName('')
    }

    return (
        <>
    <div>
      <form >
        <input type='text' onChange={(e)=> setTaskName(e.target.value) } value={taskName} placeholder='Enter task name'/>
        <button onClick={handleSubmission}>Add task</button>
      </form>
    </div>

        {
            taskList.length>0 && taskList.map((task,index)=>(
                <p key={index}>{task}</p>
            ))
        }

    </>
  )
}

export default Todo
