import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button onClick={addTask}>Add Task</button>
            {tasks.map((task, index) => (
                <ToDoItem key={index} task={task} onDelete={() => deleteTask(index)} />
            ))}
        </div>
    );
};

export default ToDoList;
