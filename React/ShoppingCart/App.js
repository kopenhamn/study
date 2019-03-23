const productList = [
    {
        id: 1,
        type: "cell-phone",
        brand: "Samsung",
        name: "Galaxy 6",
        price: 220,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        available: true,
        checkQty: 0,
        checkTotal: 0
    },
    {
        id: 2,
        type: "cell-phone",
        brand: "Apple",
        name: "iPhone 7",
        price: 550,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        available: false,
        checkQty: 0,
        checkTotal: 0
    },
    {
        id: 3,
        type: "cell-phone",
        brand: "Nokia",
        name: "3310",
        price: 30,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        available: true,
        checkQty: 0,
        checkTotal: 0
    },
    {
        id: 4,
        type: "cell-phone",
        brand: "Xiaomi",
        name: "Y 10",
        price: 220,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        available: true,
        checkQty: 0,
        checkTotal: 0
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
            <button onClick={() => props.buy(props.item.id)}>Buy it</button>
            <span>  - {props.qty} pcs</span>
            <br />
            <button>info</button>
            <p className="descriprion">Description: {props.item.description}</p>
            <hr />
        </div>
    )
}

function Total(props) {
    return (
        <div>
            <h1>Total: </h1>
            <span>${props.cost} ({props.qty} pcs.)</span>
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            productData: productList,
            qty: 0,
            total: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        console.log('first total = ' + this.state.total)

        this.setState(prevState => {
            const stateItems = prevState.productData.map(item => {
                if (item.id === id) {
                    item.checkQty += 1
                    item.checkTotal += item.price
                    console.log(item.checkQty, item.checkTotal)
                }
                return item
            })
            return stateItems
        })

        this.state.total = () => this.state.productData.map(item => {
            let total = 0;
            for(let z = 0; z < item.length; z++) {
                total += item[z].checkTotal
            }
            console.log('total = ' + total)
            return total
        })
    }

    render() {
        let product = productList.map(item => <Product key={item.id} item={item} qty={item.checkQty} buy= {this.handleClick} inStoke={item.available ? "available":"not available"} />)
        return (
            <div>
                {product}
                <Total cost={this.state.total} qty={this.state.qty} />
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
