import { createSlice } from "@reduxjs/toolkit";

//getting todo from localstorage
const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todoItems")) || [];
};

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: getDataFromLocalStorage(),
  },
  reducers: {
    //add todo to todos
    addTodo(state, action) {
      state.todos.push(action.payload);
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.todos.map((todo) => todo))
      );
    },
    //delete todo from todos
    removeTodo(state, action) {
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = filtered;
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.todos.map((todo) => todo))
      );
    },
    //change the checking status for the todo
    handleCheck(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      });
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.todos.map((item) => item))
      );
    },
  },
});

const { reducer } = TodoSlice;

export default reducer;
export const { addTodo, handleCheck, removeTodo } = TodoSlice.actions;
