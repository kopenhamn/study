import React, { Component } from 'react';
import './App.css';
import productData from './components/productData.js'
import Product from './components/Product';

class App extends Component {
    constructor() {
        super()
        this.state = {
            productsData: productData,
            totalQty: 0,
            totalPrice: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        this.setState(prevState => {
            let upData = {
                productsData: prevState.productsData.map(item => {
                    if(item.id === id) {
                        prevState.totalQty += 1;
                        prevState.totalPrice += item.price;
                        item.tQty += 1;
                        item.tPrice += item.price;
                        console.log(prevState.totalQty, prevState.totalPrice);
                    }
                    return item
                })
            }
            return upData
        })
    }

    render() {
        const products = productData.map(item => <Product key = {item.id} item = {item} onclick = {this.handleClick} />)
        return (
            <div>
                {products}
                <p>Total: <b>${this.state.totalPrice}</b> ({this.state.totalQty} pcs)</p>
            </div>
        );
    }
}

export default App;
