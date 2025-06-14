import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <button type="submit" onClick={() => dispatch(removeTodo(todo.id))}>
            X
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
