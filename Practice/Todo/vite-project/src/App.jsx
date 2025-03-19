import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [boolean, setBoolean] = useState(false);
  const [todoIndex, setTodoIndex] = useState("");

  function handleAdd() {
    setTodoList([...todoList, inputText]);
    setInputText("");    
  }

  function handleEdit(index) {
    setInputText(todoList[index]);
    setBoolean(true);
    setTodoIndex(index);
  }

  function handleUpdate() {
    const updateData = todoList.map((element , i)=> {
      return i==todoIndex?inputText:element
    })
    setTodoList(updateData)
    setInputText("");
    setBoolean(false);
  }
  function handleDelete(deleteId) {
    // const deleteData = todoList.filter((anyname , i) => i != deleteId);
    // setTodoList(deleteData);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <input
        type="text"
        placeholder="enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      {todoList &&
        todoList.map((element, index) => {
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
                onClick={() => {
                  handleEdit(index);
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
