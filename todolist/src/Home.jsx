import React, { useState } from 'react'
import Create from './Create'

function home() {
    const[todos, setTodos] = useState([])
    return (
        <div>
            <h2>To-Do List</h2>
            <Create /> {
                todos.length === 0 ?
                <div><h2>No todos</h2></div>
                :
                todos.map(todo => (
                    <li>{todo}</li>
                ))
            }
        </div>
    )
}

export default home