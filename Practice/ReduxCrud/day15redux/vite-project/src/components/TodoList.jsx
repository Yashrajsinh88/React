import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../features/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-bold">Todo List</h2>
      {status === 'loading' && <p>Loading...</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between">
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;