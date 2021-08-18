import React, { useState } from "react";

const AddNewTodos = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todos"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddNewTodos;
