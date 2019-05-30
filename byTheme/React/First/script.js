
/*
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e (
        'div'
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'

        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
        '/div'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);


const Button = (props) => {
    return (<button id="btn" onClick={Alert}>ClickMe</button>)
}
const Alert = (props) => {
    return alert('HELLO REACT!')
}

const Hello = (props) => {
    return (<h1>Hello REACT! My name is {props.name}!</h1>)
}

const Fruits = (props) => {
    return <p>{props.colors.join(', ')}</p>
}

const RenderIt = (props) => {
    return (<div>
    <Hello name="Michael"/>
    </div>
    )
}


class SayIt extends React.Component {
    render() {
        return (
        <div>
            <Button />
            <RenderIt />
            <p>And I like such fruits: </p>
            <Fruits colors={['apples', 'pears', 'bananas']} />
        </div>
        )
    }
};

ReactDOM.render(<SayIt />, document.getElementById("root"))

*/



//create a Bill


class Product extends React.Component {

    render() {
        return (
            <div>
                <span className="name">{this.props.name}</span>
                <span className="price"> - {this.props.price}$</span>
                <br />
                <br />
                <button id="buy" onClick={this.props.buy}>Buy</button> <button>Show</button>
                <br />
                <br />
                <p>Qty: {this.props.qty} item(s)</p>
                <hr />
            </div>
        )
    }
}

const productList = [
    {
        id: 1,
        name: 'Samsung',
        price: 350
    },
    {
        id: 2,
        name: 'Apple',
        price: 502
    },
    {
        id: 3,
        name: 'Asus',
        price: 400
    },
    {
        id: 4,
        name: 'Xiaomi',
        price: 230
    }
]

class Bill extends React.Component {
    constructor() {
        super()
        this.state = {
            product: productList,
            qty: 0,
            buy: function () { alert(this.state.qty);return this.state.qty+=1 }
        }
    }
    render() {
        function buy() {

        }
        const product = this.state.product.map(prod => <Product key={prod.id} name={prod.name} price={prod.price}  qty={this.state.qty} buy={this.state.buy}/>)
        return (
            <div>
                {product}
            </div>
        )
    }
};


ReactDOM.render(<Bill />, document.getElementById('root'))
