function Product(props) {
    return(
        <div>
            <h1>Name: {props.item.name}</h1>
            <p>Brand: {props.item.brand}</p>
            <p className="descriprion">Description: {props.item.descriprion}</p>
            <h3>Price: {props.item.price}</h3>
            <p>In stock: {props.item.available}
        </div>
    )
}

export default Product
