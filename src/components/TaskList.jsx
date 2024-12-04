import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask,markTaskAsCompleted  } from '../features/tasks/taskSlice';
import AddTaskForm from './AddTaskForm';
import './TaskList.css';

function TaskList({tasks}) {
  const [taskToModify, setTaskToModify] = useState(null);
  const dispatch = useDispatch();


  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleModifyTask = (task) => {
    setTaskToModify(task);
  };

  const handleMarkAsCompleted = (taskId) => {
    dispatch(markTaskAsCompleted(taskId));
  };

  return (
    <div className="task-list">
      <div className="task-grid">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>

              <div className="task-actions">
                <p>
                  {!task.completed && (
                    <button onClick={() => handleMarkAsCompleted(task.id)}>Mark as Completed</button>
                  )}
                </p>
                <button onClick={() => handleModifyTask(task)} className="modify-button">
                  Modify
                </button>
                <button onClick={() => handleDeleteTask(task.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks found for the selected filter.</p>
        )}
      </div>

      {taskToModify && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Modify Task</h3>
            <AddTaskForm task={taskToModify} />
            <button className="close-modal" onClick={() => setTaskToModify(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
