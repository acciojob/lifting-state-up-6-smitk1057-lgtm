import React from "react";

const Child1 = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            {todo.completed ? (
              <span>Completed</span>
            ) : (
              <button onClick={() => handleComplete(todo.id)}>
                complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child1;