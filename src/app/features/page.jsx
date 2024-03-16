"use client";
import React, { useState } from "react";

const page = () => {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState("");

  const addList = () => {
    if (inputs.trim() !== "") {
      setTodos([
        ...todos,
        {
          task: inputs,
          id: Math.random(),
        },
      ]);
      setInputs(""); // Clear the input field
    } else {
      alert("Enter some value you dumbass");
    }
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((del) => del.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={inputs}
        placeholder="add todos"
        onChange={(e) => setInputs(e.target.value)}
      />
      <button onClick={() => addList()}>ADD</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.task}</h1>
            <button onClick={() => deleteItem(todo.id)}> delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
