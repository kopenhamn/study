const productList = [
    {
        id: 1,
        type: "cell-phone",
        brand: "Samsung",
        name: "Galaxy 6",
        price: 220,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        available: true
    },
    {
        id: 2,
        type: "cell-phone",
        brand: "Apple",
        name: "iPhone 7",
        price: 550,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        available: false
    },
    {
        id: 3,
        type: "cell-phone",
        brand: "Nokia",
        name: "3310",
        price: 30,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        available: true
    },
    {
        id: 4,
        type: "cell-phone",
        brand: "Xiaomi",
        name: "Y 10",
        price: 220,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        available: true
    }
]

function Product(props) {
    return(
        <div>
            <hr />
            <p>Name: <span className="name">{props.item.name}</span></p>
            <p>Brand: {props.item.brand}</p>
            <h3>Price: ${props.item.price}</h3>
            <p>In stock: {props.inStoke}</p>
            <button onClick={props.buy}>Buy it</button>
            <span>  - {props.qty} pcs</span>
            <br />
            <button>info</button>
            <p className="descriprion">Description: {props.item.description}</p>
            <hr />
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            qty: 0,
            total: 0,
            buy: () => (alert(this.state.qty), this.state.qty += 1, console.log(this))
        }
    }

    render() {
        let product = productList.map(item => <Product key={item.id} item={item} qty={this.state.qty} buy= {this.state.buy} inStoke={item.available ? "available":"not available"} />)
        console.log(product)
        return (
            <div>
                {product}
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
