import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload; 
      }
    },
    markTaskAsCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = true;
    },
  },
});

export const { addTask, deleteTask, updateTask, markTaskAsCompleted  } = taskSlice.actions;
export default taskSlice.reducer;
