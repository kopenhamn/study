import React from 'react'

function TodoItem(props) {
    let doneStyle = {
        color: '#777',
        textDecoration: 'line-through'
    }
    return (
        <div style={props.item.done ? doneStyle :
                    {}}>
            <input
                type="checkbox"
                checked={props.item.done}
                onChange = {(event) => props.onChange(props.item.id)}
            />
            <p>{props.item.task}</p>
            <hr />
        </div>
    )
}

export default TodoItem
