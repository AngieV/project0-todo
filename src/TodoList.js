import React from 'react';
import ToDo from './ToDo';

export default function TodoList({ toDos, toggleToDo }) {
    return (
        toDos.map(todo => {
            return <ToDo key={todo.id} toggleToDo={toggleToDo} todo={todo} /> //return a todo element and pass in a todo

        }))
}
