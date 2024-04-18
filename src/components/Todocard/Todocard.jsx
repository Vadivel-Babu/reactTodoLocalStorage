import React from "react";
import "./Todocard.css";
import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { handleCheck, removeTodo } from "../../slices/todoSlice";

const Todocard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="list__item">
      <Checkbox
        checked={todo.isChecked}
        onChange={() => dispatch(handleCheck(todo.id))}
        color="secondary"
      />
      <p
        className={
          todo.isChecked ? "list__item-text checked" : "list__item-text"
        }
      >
        {todo.text}
      </p>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="btn btn-icon"
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default Todocard;
