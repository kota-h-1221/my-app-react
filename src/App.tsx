import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>ToDo List</h1>
            <ToDoList />
        </div>
    );
}

export default App;
