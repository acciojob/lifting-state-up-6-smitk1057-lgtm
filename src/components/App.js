
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";

const App = () => {
  const [todos,setTodos]=useState([{id:1,text:"Learn React",complete:false},
                                 {id:2,text:"Build a React app",complete:false},
                                 {id:3,text:"Deploy the React app",complete:false}])


  const handleComplete=(id)=>{
    let handleTodo=todos.map((todo)=>
      todo.id==id
      ?{...todo, complete:true}
      :todo
    )
    setTodos(handleTodo)
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child1 todos={todos}
            handleComplete={handleComplete} />
    </div>
  )
}

export default App



