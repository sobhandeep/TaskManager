import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './types';

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => action.payload,
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action: PayloadAction<number>) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, toggleStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;