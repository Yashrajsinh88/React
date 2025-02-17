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

  function handleDelete(deleteId) {
    // const deleteData = todoList.filter((anyname , i) => i != deleteId);  
    // setTodoList(deleteData);

    setTodoList(deleteData => deleteData.filter((anyname , i) => i !== deleteId)); //sort trick
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


     {todoList && todoList.map((element , index) => {
       return(
        <div key={index}>
          <p>{element}</p>
          <button onClick={() =>{handleDelete(index)}}>Delete</button>
          <button>Edit</button>
        </div>
       )
     })}            
    </>
  )
}

export default App
