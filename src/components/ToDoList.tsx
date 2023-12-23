import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import AddTaskForm from './AddTaskForm';

type Task = {
    name: string;
    isComplete: boolean;
};

const ToDoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (taskName: string) => {
        const newTask: Task = { name: taskName, isComplete: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, taskIndex) => {
            if (taskIndex === index) {
                return { ...task, isComplete: !task.isComplete };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list max-w-md mx-auto my-10 p-4 border border-gray-200 shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-4">ToDo List</h1>
            <AddTaskForm onAddTask={addTask} />
            <div className="mt-4">
                {tasks.map((task, index) => (
                    <ToDoItem 
                        key={index} 
                        task={task.name} 
                        isComplete={task.isComplete}
                        onToggleComplete={() => toggleTaskCompletion(index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
