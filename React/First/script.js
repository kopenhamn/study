
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


class Item extends React.Component {
    render(){
        return (
            <div>
                {this.props.name} - {this.props.price}$
                <br />
                <br />
                <button id="buy" onClick={this.props.buy}>Buy</button> <button>Show</button>
                <br />
                <br />
                <h2>Qty: {this.props.qty} item(s)</h2>
                <hr />
            </div>
        )
    }
}

Items.defaultProps = {
    qty: 0
}

let num = 0;

function buyIt() {
    alert('it works')
    return this.props.qty += 1;
}


class Bill extends React.Component {
    render() {
        return (
            <div>
                <Item name='Android' price={502}  buy={()=>{return this.props.qty+=1}} />
                <Item name='Android' price={502} qty={0} />
                <Item name='Android' price={502} qty={0} />
            </div>
        )
    }
};


ReactDOM.render(<Bill />, document.getElementById('root'))
