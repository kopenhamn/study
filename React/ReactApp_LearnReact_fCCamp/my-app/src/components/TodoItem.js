import React from 'react'

function TodoItem(props) {
    return (
        <div>
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
