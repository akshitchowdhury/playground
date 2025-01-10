import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationPage = () => {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Handle adding tasks
  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskName.trim() === '') {
      alert('Task name cannot be empty!');
      return;
    }
    setTaskList([...taskList, taskName]);
    setTaskName('');
  };

  // Handle task deletion
  const handleDeletion = (currTask) => {
    setTaskList(taskList.filter((task) => task !== currTask));
  };

  // Handle logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  // Filter tasks based on search text
  useEffect(() => {
    setFilteredTasks(
      taskList.filter((task) =>
        task.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [taskList, searchText]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="self-end bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
      >
        Log Out
      </button>

      {/* Task Input Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Task Manager</h2>
        <form onSubmit={handleAddTask} className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-lg rounded-lg p-4 mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Task List */}
      <div className="bg-white shadow-lg rounded-lg p-4 mt-4 w-full max-w-md">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-2 shadow-sm"
            >
              <p className="text-gray-700">{task}</p>
              <button
                onClick={() => handleDeletion(task)}
                className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationPage;
