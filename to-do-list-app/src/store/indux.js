import { configureStore } from "@reduxjs/toolkit";
import InputSlice from "./input-slice";

const store = configureStore({
  reducer: { input: InputSlice.reducer },
});

export default store;
