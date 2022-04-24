
import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [todos, setToDos] = useState([]); //destructure array and set it = useState:  element1 is toDos, element2 is an element to manage Todos
  const toDoNameRef = useRef();

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return
    setToDos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false, }]
    })
    toDoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo} >New ToDo</button>
      <button>Clear Completed ToDos</button>
      <div> 0 left ToDo</div>
    </>
  );
}

export default App;
