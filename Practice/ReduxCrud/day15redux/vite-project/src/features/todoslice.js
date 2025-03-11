import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:5000/todos');
    return response.json();
  });
  
  export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    return response.json();
  });
  
  export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: 'DELETE' });
    return id;
  });
  
  const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTodos.fulfilled, (state, action) => {
          state.todos = action.payload;
        })
        .addCase(addTodo.fulfilled, (state, action) => {
          state.todos.push(action.payload);
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
          state.todos = state.todos.filter(todo => todo.id !== action.payload);
        });
    },
  });
  
  export default todoSlice.reducer;