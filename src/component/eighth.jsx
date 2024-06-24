import React, { useState } from 'react';

const Eight = () => {
    const [todo, setTodo] = useState(new Set(["gym", "study", "sleep"]));
    const [newTodo, setNewTodo] = useState('');

    const removeHandler = (item) => {
        const newTodoSet = new Set(todo);
        newTodoSet.delete(item);
        setTodo(newTodoSet);
    }

    const addHandler = () => {
        if (newTodo.trim()) {
            const newTodoSet = new Set(todo);
            newTodoSet.add(newTodo.trim());
            setTodo(newTodoSet);
            setNewTodo('');
        }
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addHandler}>Add</button>
            </div>
            <div>
                {Array.from(todo).map((item) => (
                    <div key={item}>
                        <p>{item}</p>
                        <button onClick={() => removeHandler(item)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Eight;
