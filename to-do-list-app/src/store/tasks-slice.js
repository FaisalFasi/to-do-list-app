import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";
const TasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    fetchTask(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTask(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            name: action.payload.name,
          };
        }
        return task;
      });
    },
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice;
