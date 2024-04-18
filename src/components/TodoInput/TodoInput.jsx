import React, { useState } from "react";
import { TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import "./Todoinput.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slices/todoSlice";
import { toast } from "react-toastify";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //add todo to the state
  function handleAddTodo(e) {
    if (text.trim().length === 0) {
      toast.error("Input field can not be empty");
      return;
    }
    e.preventDefault();
    const data = {
      id: uuid().slice(0, 8),
      isChecked: false,
      text,
    };
    dispatch(addTodo(data));
    setText("");
  }

  return (
    <div className="todo-input">
      <h1>TODO</h1>
      <form action="" className="form">
        <TextField
          id="outlined-basic"
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Enter todo..."
          variant="outlined"
        />
        <button onClick={handleAddTodo} className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
