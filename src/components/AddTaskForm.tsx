import React, { useState } from 'react';

type Props = {
    onAddTask: (task: string) => void;
};

const AddTaskForm: React.FC<Props> = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(newTask);
        setNewTask('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
                className="flex-1 p-2 border border-gray-300"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
