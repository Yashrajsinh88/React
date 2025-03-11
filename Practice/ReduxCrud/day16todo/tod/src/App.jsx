import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, deleteTodo, updateTodo } from "./redux/features/todolistSlice";

function App() {
  const [inputText, setText] = useState("");
  const [boolean, setBoolean] = useState(true);
  const [todoIndex, setTodoIndex] = useState(null);
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todolist.todos);

  function handleEdit(index) {
    setText(todoData[index]);
    setTodoIndex(index);
    setBoolean(false);
  }
  function handleUpdate() {
    dispatch(updateTodo({ id: todoIndex, updateText: inputText }));
    setBoolean(true);
    setText("")
  }

  function handleAdd() {
    dispatch(AddTodo(inputText));
    setText("");
  }
  function handleDelete(index){
dispatch(deleteTodo(index))
  }
  return (
    <>
      <h1>Todolist</h1>

      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      {boolean ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <div>
        {todoData &&
          todoData.map((todo, index) => {
            return (
              <div key={index}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  edit
                </button>
                <button onClick={()=>{handleDelete(index)}}>delete</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
