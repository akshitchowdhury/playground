import React, { useState } from 'react';

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleSubmission = (event) => {
    event.preventDefault();
    setTaskList([...taskList, taskName]);
    setTaskName('');
  };

  const handleDeleteTask = (currTask) => {
    setTaskList(taskList.filter((task) => task !== currTask));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setTaskName(task);
  };

  const handleUpdateTask = (index) => {
    setTaskList(
      taskList.map((item, idx) => (idx === index ? taskName : item))
    );
    setEditingTask(null);
    setTaskName('');
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            placeholder="Enter task name"
          />
          <button onClick={handleSubmission}>Add task</button>
        </form>
      </div>

      {taskList.length > 0 &&
        taskList.map((task, index) => (
          <div key={index} className="flex flex-row justify-evenly p-6">
            {editingTask === task ? (
              <>
                <input
                  className="border-2 border-black"
                  onChange={(e) => setTaskName(e.target.value)}
                  value={taskName}
                  type="text"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdateTask(index);
                  }}
                >
                  Update Task
                </button>
              </>
            ) : (
              <p>{task}</p>
            )}

            <button
              onClick={() => handleEdit(task)}
              className="bg-green-500 border-2 border-blue-500 rounded-md"
            >
              Edit Task
            </button>
            <button
              onClick={() => handleDeleteTask(task)}
              className="bg-red-500 border-2 border-blue-500 rounded-md"
            >
              Delete Task
            </button>
          </div>
        ))}
    </>
  );
};

export default Todo;
