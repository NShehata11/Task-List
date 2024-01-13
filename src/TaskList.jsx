import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask, startEdit }) {
    return (
        <div>
            {/* Displays each task from tasks */}
            {tasks.map(task => (
                <div key={task.id}>
                    <div>
                        {/* Checkbox for toggling completion status */}
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleTask(task.id)} 
                            className='mt-10'
                        />
                        {/* Display task ID, title, and description */}
                        <span className='mx-5 mt-10 font-bold font-mono text-white text-xl'>{task.title}</span>
                        <h1 className='mx-8 font-mono font-bold text-white text-sm'>{task.description}</h1>
                        {task.completed && <h1 className='mx-8 font-mono font-bold text-lime-500 text-sm'>Completed</h1>}
                        <h1 className='mx-8 font-mono text-white text-sm'>ID: {task.id}</h1>
                    </div>

                    {/* Buttons for editing and deleting tasks */}
                    <button className='mx-5 mb-10 bg-zinc-600 rounded-md font-mono font-bold text-white w-32' onClick={() => startEdit(task)}>Edit</button>
                    <button className='mx-5 mb-10 bg-zinc-600 rounded-md font-mono font-bold text-white w-32' onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;