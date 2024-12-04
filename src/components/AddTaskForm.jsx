import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import './AddTaskForm.css';

function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({
      id: uuidv4(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    }));
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
  };

  const setToday = () => {
    setDueDate(new Date().toISOString().split('T')[0]);
  };

  const setTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDueDate(tomorrow.toISOString().split('T')[0])
  };

  return (
    <div className="add-task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleAddTask}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="dueDate">Due Date</label>
        <div className="date-buttons">
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button type="button" onClick={setToday} className="today-button">
            Today
          </button>
          <button type="button" onClick={setTomorrow} className="tomorrow-button">
            Tomorrow
          </button>
        </div>

        <label>Priority</label>
        <div className="priority-buttons">
          <button
            type="button"
            className={`priority-button low ${priority === 'low' ? 'active' : ''}`}
            onClick={() => setPriority('low')}
          >
            Low
          </button>
          <button
            type="button"
            className={`priority-button medium ${priority === 'medium' ? 'active' : ''}`}
            onClick={() => setPriority('medium')}
          >
            Medium
          </button>
          <button
            type="button"
            className={`priority-button high ${priority === 'high' ? 'active' : ''}`}
            onClick={() => setPriority('high')}
          >
            High
          </button>
        </div>

        <button type="submit" className="submit-task-button">Submit Task</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
