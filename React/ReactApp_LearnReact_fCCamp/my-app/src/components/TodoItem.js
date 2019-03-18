import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.item.done}
                onChange = {() => console.log("changed")}
            />
            <p>{props.item.task}</p>
            <hr />
        </div>
    )
}

export default TodoItem
