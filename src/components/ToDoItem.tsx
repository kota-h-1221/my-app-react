import React from 'react';

type Props = {
    task: string;
    onDelete: () => void;
};

const ToDoItem: React.FC<Props> = ({ task, onDelete }) => {
    return (
        <div className="todo-item">
            <span>{task}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ToDoItem;