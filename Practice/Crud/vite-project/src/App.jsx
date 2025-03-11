import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [todoIndex, setTodoIndex] = useState(null);

  function handleSubmit() {
    if (inputText.trim() === "") return;
    setTodolist([...todolist, inputText]);
    setInputText("");
  }

  function handleDelete(id) {
    let filterData = todolist.filter((_, i) => i !== id);
    setTodolist(filterData);
  }

  function handleEdit(index) {
    setInputText(todolist[index]);
    setTodoIndex(index);
    setIsEditing(true);
  }

  function handleUpdate() {
    let updateData = todolist.map((element, i) =>
      i === todoIndex ? inputText : element
    );
    setTodolist(updateData);
    setInputText("");
    setIsEditing(false);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Today</h1>
      
      <div className="w-full max-w-xl bg-white p-4 shadow-lg rounded-xl">
        <input
          className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
          type="text"
          placeholder="What have for today?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="w-full mt-4 p-3 rounded-lg bg-green-500 text-white font-semibold"
          onClick={isEditing ? handleUpdate : handleSubmit}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="w-full max-w-xl mt-6 bg-white rounded-xl shadow-md overflow-hidden">
        {todolist.length === 0 ? (
          <p className="text-center text-gray-500 p-4">No tasks added yet.</p>
        ) : (
          todolist.map((element, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <button className="text-green-500 text-xl">✔</button>
                <p className="text-lg font-medium">{element}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-gray-400 hover:text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  ✖
                </button>
                <button
                  className="text-gray-400 hover:text-blue-500"
                  onClick={() => handleEdit(index)}
                >
                  ✎
                </button>
              </div>
            </div>
          ))
        )}
        <div className="bg-green-500 text-white text-center p-4 cursor-pointer">
          What have for today? »
        </div>
      </div>
    </div>
  );
}

export default App;
