import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
