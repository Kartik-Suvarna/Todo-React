import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <>
        <div className="info">
            <p className="personal">Kartik Suvarna</p>
            <div><i class="fa-solid fa-phone"></i>
            <p className="personal">+91 9920556987</p></div>
            <div><i class="fa-solid fa-envelope"></i>
            <a className="personal" href="kartikmsuvarna@gmil.com">kartikmsuvarna@gmail.com</a></div>
            </div>
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter New Item" />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
        </>
    )
}