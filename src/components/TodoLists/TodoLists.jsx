import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./TodoLists.css";

function TodoLists() {
  const loadedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(loadedTodos);
  const [todo, setTodo] = useState("");

  // useEffect to run once the component mounts
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos(() => [
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  }

  function handleDelete(id) {
    var newData = todos.filter((item) => item.id != id);
    newData = JSON.stringify(newData);
    localStorage.setItem("todos", newData);
    window.location.reload();
  }

  return (
    <div className="app">
      <form className="form">
        <input
          name="todo"
          type="text"
          className="input"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button className="submit-btn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button
              className="delete-icon-btn"
              type="button"
              onClick={() => handleDelete(todo.id)}
            >
              <MdOutlineDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoLists;
