
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [toDos, setToDos] = useState([]); //destructure array and set it = useState:  element1 is toDos, element2 is an element to manage Todos

  return (
    <>
      <TodoList />
      <input type="text" />
      <button>New ToDo</button>
      <button>Clear Completed ToDos</button>
      <div> 0 left ToDo</div>
    </>
  );
}

export default App;
