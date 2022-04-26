
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoApp.toDos"

function App() {

  const [toDos, setToDos] = useState([]) //destructure array and set it = useState:  element1 is toDos, element2 is an element to manage ToDos
  const toDoNameRef = useRef()

  useEffect(() => { //called only when component loads
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // set toDos to stored toDos if we have stored toDos
    if (storedToDos) setToDos(storedToDos)
  }, [])//pass in empty array so function will only be called once since the array never changes 

  useEffect(() => { //save toDos and changes to them
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos))
  }, [toDos]);

  function toggleToDo(id) {
    const newToDos = [...toDos];//never modify state directly-create a copy and use it to set the new state
    const todo = newToDos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setToDos(newToDos);
  }

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return
    setToDos(prevToDos => {
      return [...prevToDos, { id: uuidv4(), name: name, complete: false, }]
    })
    toDoNameRef.current.value = null;
  }

  function clearCompleted(id) {
    const newToDos = toDos.filter(todo => !todo.complete)
    setToDos(newToDos)
  }


  return (
    <>
      <TodoList toDos={toDos} toggleToDo={toggleToDo} />
      <label>New Task:<input ref={toDoNameRef} type="text" /></label>
      <button onClick={handleAddToDo} >Add</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      <div> {toDos.filter(todo => !todo.complete).length} left ToDo</div>
    </>
  );
}

export default App;
