import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const  [inputText , setInputText] = useState("");
  const [todoList , setTodoList] = useState(JSON.parse(localStorage.getItem("todoData")) || []);
  // const [todoIndex, setTodoIndex] = useState("");

  function handleAdd() {
    setTodoList([...todoList , inputText]);
    setInputText("");
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  },[todoList])


  return (
  
    <>  
    <input type="text" placeholder='enter your task' value={inputText} onChange={(e)=>{
      setInputText(e.target.value)
    }}/> 
     <button onClick={handleAdd}>Add</button>    
     {todoList && todoList.map((element) => {
       return(
        <div>
          <p>{element}</p>
        </div>
       )
     })}            
    </>
  )
}

export default App
