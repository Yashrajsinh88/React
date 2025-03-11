import React, { useState } from 'react'

const TodoApp = () => {

const [inputText , setInputText] = useState("")
const  [data , setData] = useState([]) 

function handleAdd() {
    setData(...setData , inputText);
}

  return (
    <>
    <h1>Todo App</h1>

    <form action="">
        <label htmlFor="">Get Data:</label>
        <input type="text" placeholder='Enter your topics' value={inputText} onChange={(e) =>{setInputText(e.target.value)}}/>
        <button onClick={handleAdd}>Add</button>
    </form>
    
    {data && data.map((item , index) => {
        <p>{item}</p>
    })}

    </>
  )
}

export default TodoApp