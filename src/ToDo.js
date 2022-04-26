import React from 'react';

export default function ToDo({ todo, toggleToDo }) { //pass todo element

    function handleCompleted() {
        toggleToDo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleCompleted} />
                {todo.name}
            </label>

        </div>
    )
}
