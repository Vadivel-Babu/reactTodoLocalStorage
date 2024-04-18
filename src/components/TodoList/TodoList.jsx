import React from "react";
import Todocard from "../Todocard/Todocard";
import "./TodoList.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  //getting todos from state
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1 className="heading">Todo List</h1>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo) => (
            <Todocard key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <h2 className="heading">No Todo Found</h2>
      )}
    </div>
  );
};

export default TodoList;
