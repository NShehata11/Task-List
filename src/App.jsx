import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  // State for storing tasks
  const [tasks, setTasks] = useState([]);

  // State of which task is being edited
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Function to add a new task or update an existing one
  function addTask(newTask) {
    if (taskToEdit) {
      // Update existing task
      setTasks(tasks.map(task => task.id === newTask.id ? { ...newTask, id: task.id } : task));
    }
    else {
      // Add new task with a unique id
      newTask.id = Date.now();
      setTasks([...tasks, newTask]);
    }
    
    // Reset the task being edited
    setTaskToEdit(null);
  }

  // Function to delete a task
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  // Function to set a task for editing
  function startEdit(task) {
    setTaskToEdit(task);
  }

  // Function to toggle completion status of a task
  function toggleTask(taskId) {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <>
      <h1 className='text-center mt-10 font-mono font-bold text-3xl text-white'>Task List</h1>
      <div className='flex flex-col items-center'>
        <div>
          {/* Task form component for adding/updating tasks */}
          <TaskForm addTask={addTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        </div>
        <div>
          {/* Task list component for displaying tasks */}
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} startEdit={startEdit} />
        </div>
      </div>
      
    </>
  );
}

export default App;