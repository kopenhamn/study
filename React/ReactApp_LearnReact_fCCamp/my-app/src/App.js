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

//22. Mapping components Practice ()
import Product from './components/Product'
import productsData from './components/productsData'

//23. Todo App - Phase3 (1:53:50)

//24. Class-Based Components (1:58:25)

//25 Class-Based Components Practice (2:03:40)

//26. State (2:07:20)

//27. State Practice (2:12:15)

//28. State Practice 2 (2:15:55)

//29. Todo App - Phase 4 (20:20:05)
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'

//30. Handling Events in React (2:22:10)

//31. Todo App - Phase 5 (2:26:00)

//32. Changing State (2:27:20)

//---




// 29, 31
class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoList = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} />)

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

/*
// 28

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: true
        }
    }

    render() {
        let wordToDisplay
        if(this.state.loggedIn) {
            wordToDisplay = "in"
        } else {
            wordToDisplay = "out"
        }
        return (
            <h2>You are currently logged {wordToDisplay}.</h2>
        )
    }
}



// 27

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Michael",
            age: 34
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
            </div>
        )
    }
}
*/


/*
function App () {

    // 22
    const products = productsData.map(item => <Product key={item.id} product={item} />)


    return (
        <div className="App">
            {products}
        </div>
    );
}
*/

export default App;
