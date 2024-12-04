import React from 'react';
import './TaskItem.css';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due Date: {task.dueDate}</p>
      <p className={`task-priority priority-${task.priority}`}>
        Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </p>
      <div className={`task-status ${task.completed ? 'completed' : 'pending'}`}>
        {task.completed ? 'Completed' : 'Pending'}
      </div>
    </div>
  );
}

export default TaskItem;
