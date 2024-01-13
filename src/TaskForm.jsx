import React, { useState, useEffect } from 'react';

// Task Form component for adding and editing tasks
function TaskForm({ addTask, taskToEdit, setTaskToEdit }) {
    
    // Local state for task title and description
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Effect to prefill form when editing a task
    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    // Handle form submission for adding/updating tasks
    function handleSubmit(event) {
        event.preventDefault();
        if (!title || !description) return; // Prevent adding empty tasks

        // Prepare task data
        const taskData = { title, description, completed: false };
        addTask(taskToEdit ? { ...taskToEdit, ...taskData } : taskData);

        // Reset form fields
        setTitle('');
        setDescription('');
        setTaskToEdit(null);  // Resets editing state
    }

    return (
        <form onSubmit={handleSubmit} className='my-10'>
        {/* Input fields for task title and description */}
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className='mx-5 rounded-sm font-mono bg-zinc-600 text-white'
          />
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className='mx-10 rounded-sm font-mono bg-zinc-600 text-white'
          />
          {/* Submit button for adding/updating tasks */}
          <button type="submit" className='mx-5 bg-zinc-600 rounded-md font-mono w-36 font-bold text-white'>{taskToEdit ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;