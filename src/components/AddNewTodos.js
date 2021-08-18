import React, { useState } from "react";

const AddNewTodos = ({ addTodos }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(title);
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
