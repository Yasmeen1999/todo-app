import React, { useState } from "react";

const AddNewTodos = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="Add new todos"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      ></input>
      <button type="submit" style={{ display: "block", marginLeft: "10px" }}>
        Add Todo
      </button>
    </form>
  );
};

export default AddNewTodos;
