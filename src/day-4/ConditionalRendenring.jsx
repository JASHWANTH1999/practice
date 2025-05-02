import React from "react"
export const ListAndCondiotionalRendering = () => {
    const [todo, setTodo] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const addhandler= (e) => {
        e.preventDefault()
        setTodos([...todos,todo])
    }
    const removeHandler = (e) => {
        e.preventDefault()
        todos.pop()
        setTodos([...todos])
    }
    const todoChangeHandler = (e) => {
        setTodo(e.target.value)
    }
    return (
        <>
        <input type="text" value={todo} onChange={todoChangeHandler} placeholder="Enter your name" />
        <button onClick={addhandler}>Add</button>
        <button onClick={removeHandler}>Remove</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
        </>
    )
}