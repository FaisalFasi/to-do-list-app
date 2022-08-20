import { createSlice } from "@reduxjs/toolkit";
const InputSlice = createSlice({
  name: "input",
  initialState: { tasks: [] },
  reducers: {
    addTask(state, action) {
      state.tasks = action.payload;
      // console.log("payload ", state.tasks);
    },
    removeTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updataTask(state, action) {
      const id = action.payload;

      const updatingTask = state.tasks.filter((task) => task.id === id);
      // updatingTask.task;
      console.log("updatingTask: ", updatingTask);
    },
  },
});

export const inputActions = InputSlice.actions;
export default InputSlice;
