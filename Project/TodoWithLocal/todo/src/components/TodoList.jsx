import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null); 


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const isDuplicate = todos.some(todo => todo.text.toLowerCase() === inputValue.toLowerCase());

      if (isDuplicate) {
        alert('This task already exists!'); 
        return; 
      }

      if (editingId !== null) {
       
        setTodos(
          todos.map(todo =>
            todo.id === editingId ? { ...todo, text: inputValue } : todo
          )
        );
        setEditingId(null);
      } else {
  
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      }
      setInputValue(''); 
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setInputValue(text); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
          placeholder={editingId !== null ? "Edit your todo" : "Add a new todo"}
        />
        <button
          onClick={addTodo}
          className={`p-2 ${
            editingId !== null ? 'bg-green-500' : 'bg-blue-500'
          } text-white rounded-r`}
        >
          {editingId !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b">
            <span
              className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => startEditing(todo.id, todo.text)}
                className="bg-yellow-500 text-white p-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
