import React from 'react'

function Todo(props) {
    const complitedStyle = {
        fontStyle: "italic",
        color: '#cdcdcd',
        textDecoration: "line-through"
    }
    return (
        <div>
            <input type="checkbox" checked={props.item.done} onChange={()=>props.onchange(props.item.id)}/>
            <p style={props.item.done ? complitedStyle: null}> Task: {props.item.task}</p>
            <hr />
        </div>
    )
}

export default Todo
