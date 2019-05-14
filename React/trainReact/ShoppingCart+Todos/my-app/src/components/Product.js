import React from 'react'

function Product(props) {
    let available = () => {
        if(props.item.inStock > 10) {
            return "more than 10 available"
        } else if(props.item.inStock > 0) {
            return "less than 10 available"
        } else {
            return "not available at the moment"
        }
    }

    return (
        <div>
            <p className="title">Cell Phone</p>
            <p>Brand: <b>{props.item.name}</b></p>
            <p>Model: <b>{props.item.model}</b></p>
            <p>Price: <b>{props.item.price}</b></p>
            <b>{available()}</b>
            <br />
            <button onClick = {() => {props.onclick(props.item.id)}}>Buy</button>
            <span>(cart: {props.item.tQty} pcs = ${props.item.tPrice})</span>
            <hr />
        </div>
    )
}

export default Product
