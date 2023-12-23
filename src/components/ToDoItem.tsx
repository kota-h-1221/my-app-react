import React from 'react';

type Props = {
    task: string;
    isComplete: boolean;
    onToggleComplete: () => void;
    onDelete: () => void;
};

const ToDoItem: React.FC<Props> = ({ task, isComplete, onToggleComplete, onDelete }) => {
    return (
        <div className={`flex justify-between items-center p-2 mb-2 ${isComplete ? 'bg-green-100' : 'bg-gray-100'}`}>
            <span className={`${isComplete ? 'line-through' : ''}`}>{task}</span>
            <div>
                <input
                    type="checkbox"
                    checked={isComplete}
                    onChange={onToggleComplete}
                    className="mr-2"
                />
                <button onClick={onDelete} className="bg-red-500 text-white p-1">Delete</button>
            </div>
        </div>
    );
};

export default ToDoItem;