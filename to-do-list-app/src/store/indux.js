import { configureStore } from "@reduxjs/toolkit";
// import InputSlice from "./input-slice";
import TasksSlice from "./tasks-slice";

const store = configureStore({
  reducer: { tasks: TasksSlice.reducer },
});

export default store;
