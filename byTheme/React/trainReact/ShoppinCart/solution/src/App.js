import React, { Component } from 'react'
import './App.css';

import productList from './components/productData.js';
import Product from './components/Product';

class App extends Component {
    state = {
        data: productList
    }

    handleClick = (id) => {
        this.setState(prevState => {
            return {data: prevState.data.map(item => {
                if(item.id === id) {
                    item.buy += 1;
                    console.log(item);
                }
                return item
            })}
        })
    }

    render() {
        const products = this.state.data.map(item => <Product key = {item.id} item = {item} onClick={this.handleClick}/>)
        return (
            <div className="App">
                {products}
            </div>
        );
    }
}

export default App;
