import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todolist',
  initialState: {
    todos: []
  },
  reducers: {
    AddTodo: (state , action) =>{
        state.todos =[...state.todos , action.payload]
    },
  }
})

// Action creators are generated for each case reducer function
export const { AddTodo } = todoListSlice.actions

export default todoListSlice.reducer