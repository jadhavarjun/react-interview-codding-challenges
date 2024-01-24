import { useState, useEffect } from "react";
import { MdOutlineDelete, MdEdit } from "react-icons/md"; // Import MdEdit icon
import "./TodoLists.css";

function TodoLists() {
  const loadedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(loadedTodos);
  const [todo, setTodo] = useState("");
  const [editingId, setEditingId] = useState(null); // Track the id being edited

  // useEffect to run once the component mounts
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function getNextId() {
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  }

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      if (editingId !== null) {
        // Editing an existing todo
        setTodos((prevTodos) =>
          prevTodos.map((item) =>
            item.id === editingId ? { ...item, text: todo.trim() } : item
          )
        );
        setEditingId(null);
      } else {
        // Adding a new todo
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            id: getNextId(),
            text: todo.trim(),
          },
        ]);
      }
    }
    setTodo("");
  }

  function handleDelete(id) {
    const newData = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newData));
    setTodos(newData);
  }

  function handleEdit(id) {
    const todoToEdit = todos.find((item) => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.text);
      setEditingId(id);
    }
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
          {editingId !== null ? "Update" : "Submit"}
        </button>
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            <span>{todoItem.text}</span>
            <div>
              <button
                className="edit-icon-btn"
                type="button"
                onClick={() => handleEdit(todoItem.id)}
              >
                <MdEdit />
              </button>
              <button
                className="delete-icon-btn"
                type="button"
                onClick={() => handleDelete(todoItem.id)}
              >
                <MdOutlineDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
