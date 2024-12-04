import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';
import AddTaskForm from './AddTaskForm';

function Home() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const dueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < new Date() && !task.completed
  ).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="home">
      <h1>Task Overview</h1>
      <div className="stats-buttons">
        <div className="home-buttons">
          <Link to="/tasks">
            <button className="view-task-button">View All Tasks</button>
          </Link>
          <button className="add-task-button" onClick={() => setShowAddTaskForm(true)}>Add Task</button>
        </div>
        
        <div className="task-stats">
          <div className="task-box">
            <h3>Total Tasks</h3>
            <p>{totalTasks}</p>
          </div>
          <div className="task-box">
            <h3>Completed Tasks</h3>
            <p>{completedTasks}</p>
          </div>
          <div className="task-box">
            <h3>Pending Tasks</h3>
            <p>{pendingTasks}</p>
          </div>
          <div className="task-box">
            <h3>Due Tasks</h3>
            <p>{dueTasks}</p>
          </div>
        </div>
      </div>
      
      

      {showAddTaskForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddTaskForm />
            <button className="close-modal" onClick={() => setShowAddTaskForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;