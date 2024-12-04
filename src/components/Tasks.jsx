import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';
import './Tasks.css';
import Navbar from './Navbar';

function Tasks() {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchTerm && !matchesSearch) return false;
    if (filter === 'all') return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'completed') return task.completed && task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'due') return !task.completed && new Date(task.dueDate) < new Date() && task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'pending') return !task.completed && task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return false;
  });

  return (
    <div className="tasks">
      <Navbar onSearch={setSearchTerm} />
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="filter-bar">
        <button onClick={() => setFilter('all')}>All Tasks</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('due')}>Due</button>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default Tasks;
