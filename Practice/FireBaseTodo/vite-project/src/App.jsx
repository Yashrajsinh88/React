import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "./config/fitebase";
import { data } from "react-router-dom";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [editId, setEditId] = useState("");

  const database = collection(db, "todolist");

  async function handleAdd() {
    if (!inputList.trim()) {
      alert("Please Enter your first field");
      return;
    }
    await addDoc(database, { todo: inputList });
    alert("your todo add successfully");
    setInputList("");
    const getTodos = await getDocs(database);
    setTodoList(
      getTodos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  }

function handleEdit(todo) {
  setInputList(todo.todo)
  setBoolean(true);
  setEditId(todo.id)
}

  useEffect(() => {
    getData();
  }, []);

  async function handleUpdate() {
    if (!inputList.trim()) {
      alert("Please enter your first field");
      return;
    }
    const updateValue =doc(database ,editId);
    await updateDoc(updateValue,{todo: inputList});
    alert("your todo updated successfully");
    setInputList("");
    setBoolean(false);
    const getTodos = await getDocs(database);
    setTodoList(
      getTodos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }


  async function getData() {
    const getTodos = await getDocs(database);
    setTodoList(
      getTodos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }
 
 async function handleDelete(id) {
  console.log(id);
  
    const DeleteValue = doc(database, id);
    await deleteDoc(DeleteValue);
    // const filterData = todoList.filter((todo)=> todo.id != id);
    setTodoList((prev)=> prev.filter((doc)=> doc.id != id));
  }

  return (
    <>
      <input
        type="text"
        value={inputList}
        onChange={(e) => setInputList(e.target.value)}
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <div>
        {todoList &&
          todoList.map((item , id) => (
            <div key={id}>
              <p>{item.todo}</p>
              <button onClick={()=>handleEdit(item)}>Edit</button>
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
