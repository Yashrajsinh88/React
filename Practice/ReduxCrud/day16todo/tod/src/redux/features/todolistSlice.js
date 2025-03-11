import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todolistData")) || [],
  },
  reducers: {
    AddTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todolistData", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo, i) =>
        i === action.payload.id ? action.payload.updateText : todo
      );
      localStorage.setItem("todolistData", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo, i) => i !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function

export const { AddTodo, deleteTodo, updateTodo } = todolistSlice.actions;
//todolist reducer
export default todolistSlice.reducer;
