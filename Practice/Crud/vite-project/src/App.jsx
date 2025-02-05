import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [boolean, setBoolean] = useState(false);
  const [todoIndex, setTodoIndex] = useState("");//3

  function handleSubmit() {
    // todolist.push(inputText);
    setTodolist([...todolist, inputText]); // [inputText]// [react]// setTodolist ([html,react])//[node,html,react]
    setInputText("");
  }

  function handleDelete(id) {
    let filterData = todolist.filter((element, i) => i != id); // 0!=2 1!=2 2!=2
    setTodolist(filterData);
  }
  function handleEdit(index) {//3
    console.log(index, todolist[index]);//3 //node
    setInputText(todolist[index]);//node
    setTodoIndex(index);//3
    setBoolean(true);
  }
  function handleUpdate() {
    let updateData = todolist.map((element,i)=>{
      return i==todoIndex?inputText:element
    })
    console.log(updateData)//[react,html,css,poiytre,mongodb]
    setTodolist(updateData);
    setInputText("")
    setBoolean(false);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="enter your task"
        value={inputText}//qwerty
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSubmit}>ADD</button>
      )}

      {todolist &&
        todolist.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
              <button
                onClick={()=>{
                  handleEdit(index);//3
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;