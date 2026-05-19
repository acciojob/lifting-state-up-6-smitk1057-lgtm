import React, { useState } from "react";
import Child1 from "./Child1";

function App() {

  const [todos, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build React App", completed: false },
    { id: 3, text: "Deploy React App", completed: false },
  ]);

  const handleComplete = (id) => {

    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: true }
        : todo
    );

    setTodo(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child1
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;