import React, { Component } from 'react';
import './view/css/App.css';
import Logo from './components/Logo'

class App extends Component {
    constructor() {
        super()
        this.state = {
            preload: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                preload: false
            })
            console.log(this.state.preload)
        }, 1500)
    }

    render() {
        return (
            <div className="App">
                <Logo preload = {this.state.preload}/>
            </div>
        );
    }
}

export default App;
