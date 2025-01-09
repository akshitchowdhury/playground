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

    const handleDeleteTask = (currtask)=>{
        setTaskList(taskList.filter((task)=>currtask!==task))
        console.log("Task deleted!")
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
                <>
                <div key={index} className='flex flex-row'> 
                <p>{task}</p>
                <button onClick={()=>handleDeleteTask(task) } className='bg-red-500 border-2 border-blue-500 rounded-md'>Delete task</button>
                </div>
                </>
            ))
        }

    </>
  )
}

export default Todo
