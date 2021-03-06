import React, { useState } from "react";
import AddNewTodos from "./AddNewTodos";
import uuid from "uuid/dist/v1";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { title: "Thinking", id: 1 },
    { title: "Sleeping", id: 2 },
    { title: "Learning", id: 3 },
    { title: "Eating", id: 4 },
  ]);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuid() }]);
  };
  return (
    <div>
      <h1>Todays todo list</h1>
      <AddNewTodos addTodo={addTodo} />
      <ol>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default TodoList;
