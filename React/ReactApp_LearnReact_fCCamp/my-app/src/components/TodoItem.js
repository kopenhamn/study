import React from 'react'

function TodoItem(props) {
    return (
        <div style={props.item.done ? {color:'green', background: '#cfc'} :
                    {color:'red', background: '#fcc'}}>
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
