import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//20. Props and styling Practice
import Joke from './components/Joke'

//21. Mapping components
import jokesData from './components/jokesData'

//22. Mapping components practicing
import Product from './components/Product'
import productsData from './components/productsData'

//---

function App () {
    const products = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)



    return (
        <div className="App">
            {products}
        </div>
    );
}

export default App;
