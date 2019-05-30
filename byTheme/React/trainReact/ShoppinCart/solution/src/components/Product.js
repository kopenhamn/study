import React from 'react'

function Product(props) {
    let available = () => {
        if(props.item.inStock < 1) {
            return "not available"
        }
        if(props.item.inStock < 5) {
            return "almost gone"
        }
        if(props.item.inStock < 20) {
            return "anough"
        }
        if(props.item.inStock >= 20) {
            return "more than anough"
        }
    }
    return (
        <div>
            <p>{props.item.type}</p>
            <p>Brand: <span style={{fontWeight:"bold"}}>{props.item.brand}</span></p>
            <p>Model: <span style={{fontWeight:"bold"}}>{props.item.model}</span></p>
            <p>Price: <span style={{fontWeight:"bold"}}>{props.item.price}</span></p>
            <p>Available: <span style={{fontWeight:"bold"}}>{available()}
            </span></p>
            <button onClick={() => props.onClick(props.item.id)}>Buy</button>
            <span> ({props.item.buy} pcs = ${props.item.buy * props.item.price}</span>)
            <hr />
        </div>
    )
}

export default Product
