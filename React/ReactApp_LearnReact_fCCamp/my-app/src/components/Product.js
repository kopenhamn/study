import React from 'react'

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Price: {props.price}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Product
