import "./App.css";
import { getTodos } from "../api/api.mjs";
import { useState, useEffect } from "react";
import AddTodo from "./components/addtodo/addtodo.jsx";
import TodoItem from "./components/todoItems/todoItems.jsx";

function App() {
  const [todos, setTodos] = useState([]); // <-- state för dina todos
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodos(); // <-- hämta datan
        setTodos(data); // <-- lägg in i state
      } catch (err) {
        console.error("Kunde inte hämta todos:", err);
      }
    }

    fetchData();
  }, []); // <-- körs bara vid första renderingen

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.title} done={todo.done} key={todo.id} />;
  });
  return (
    <section className="container">
      <h2>mina todos!:</h2>
      <section className="todo-section">{todoComponents}</section>
      <AddTodo></AddTodo>
    </section>
  );
}

export default App;
