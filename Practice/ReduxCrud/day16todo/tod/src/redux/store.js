import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todolistSlice";

export default configureStore({
  reducer: {
    todolist: todoReducer,
  },
});
