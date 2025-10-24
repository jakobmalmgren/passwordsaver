import "./App.css";
import { getTodos } from "../api/api.mjs";
import AddTodo from "./components/addtodo/addtodo.jsx";
import TodoItem from "./components/todoItems/todoItems.jsx";

function App() {
  const todoComponents = getTodos.map((todo) => {
    return <TodoItem task={todo.title} done={todo.done} key={todo.id} />;
  });
  return (
    <section className="container">
      <h2>mina todos!:</h2>
      <section className="todo-section">{todoComponents}</section>
      <section className="todo-section"></section>
      <AddTodo></AddTodo>
    </section>
  );
}

export default App;
