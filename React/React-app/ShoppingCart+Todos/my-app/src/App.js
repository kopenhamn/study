import React, { Component } from 'react';
import './App.css';

import productData from './components/productData.js'
import Product from './components/Product';

import todoData from './components/todoData.js';
import Todo from './components/Todo'

class App extends Component {
    constructor() {
        super()
        this.state = {
            productsData: productData,
            totalQty: 0,
            totalPrice: 0,
            todos: todoData
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(id) {
        this.setState(prevState => {
            prevState.todos.map(item => {
                if(item.id === id) {
                    item.done = !item.done
                }
                return item
            });
            return prevState
        })
    }

    render() {
        const products = productData.map(item => <Product key = {item.id} item = {item} onclick = {this.handleClick} />);
        const updatedTodos = todoData.map(item =>
            <Todo key={item.id} item={item} onchange={this.handleChange}/>
        );
        return (
            <div>
                <div>
                    {products}
                    <p>Total: <b>${this.state.totalPrice}</b> ({this.state.totalQty} pcs)</p>
                </div>
                <div>
                    {updatedTodos}
                </div>
            </div>
        );
    }
}

export default App;
