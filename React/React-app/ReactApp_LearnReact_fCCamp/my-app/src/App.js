import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart'

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

//33. Todo App - Phase 6 (2:39:40)

//34. Lifecycle Methods Part 1 (2:47:25)

//35. Lifecycle Methods Part 2 (2:56:55)

//36. Conditional Rendering (3:00:20)
import Conditional from './components/Conditional'

//37. Conditional Rendering Part 2 (3:11:35)

//38. Conditional rendering Practice (3:14:35)

//39. Todo App - Phase 7 (3:23:10)

//40. Fetching data from an API (3:25:45)

//41. Forms Part 1 (3:36:45) input-text

//42. Forms Part 2 (3:49:00) textarea/checkbox/radio/select

//43. Forms Practice (4:04:25) Travel form

//-----------------CODE is here----------------------

//43: Travel form

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            isVegetarian: "",
            isKosher: "",
            isLactoseFree: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <label>
                    Location:
                    <select
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                    >
                        <option value="Sahara Desert">Sahara Desert</option>
                        <option value="USA">USA</option>
                        <option value="Australia">Australia</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegetarian"
                        checked={this.state.isVegetarian}
                        onChange={this.handleChange}
                    /> vegetarian?
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                    /> kosher?
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={this.state.isLactoseFree}
                        onChange={this.handleChange}
                    /> lactose free?
                </label>


                <p>First name: {this.state.firstName}</p>
                <p>Last name: {this.state.lastName}</p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Location: {this.state.location}</p>
                <p>Dietary restrictions:
                    {this.state.isKosher ? " Kosher," : null}
                    {this.state.isVegetarian ? " Vegetarian," : null}
                    {this.state.isLactoseFree ? " Lactose Free": null}
                </p>
                <button onClick={()=>{
                        let list = []

                        if(this.state.isKosher) {
                            list.push(" Kosher")
                        }
                        if (this.state.isVegetarian) {
                            list.push(" Vegetarian")
                        }
                        if(this.state.isLactoseFree) {
                            list.push(" Lactose Free")
                        }

                        console.log(list);
                        return alert(
                        'First name: ' + this.state.firstName +
                        '\nLast name: ' + this.state.lastName +
                        '\nAge: ' + this.state.age +
                        '\nGender: ' + this.state.gender +
                        '\nLocation: ' + this.state.location +
                        '\nDietary restrictions: ' + list
                    )
                }}>Submit</button>
            </form>
        )
    }
}

//-----------------CODE is here----------------------
/*
//42:

class App extends Component {
    constructor() {
        super()
        this.state = {
            textArea: "Some default text",
            isFriendly: true,
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        alert(event)
    }

    render() {
        return (
            <form action={this.handleSubmit}>
                <textarea
                    name="textArea"
                    value = {this.state.textArea}
                    onChange = {this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        onChange={this.handleChange}
                        checked={this.state.isFriendly}
                    /> is friendly?
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                        checked={this.state.gender === "male"}
                    /> male?
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                        checked={this.state.gender === "female"}
                    /> female?
                </label>
                //{ formik }

                <br />
                <label>
                    Favorite color:
                </label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                </select>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is: {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}


//41:

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form method='GET'>
                    <input
                        type='text'
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type='text'
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </form>
            </div>
        )
    }
}

//40:
class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data =>
            this.setState({
                loading: false,
                character: data
            })
        )
    }

    render() {
        const text = this.state.loading ? "loading...":this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}


//39:
class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000)
    }

    render() {
        return(
            <div>
                <h1>{this.state.loading ? 'Loading...' : 'Loaded!'}</h1>
            </div>
        )
    }
}



//38:
class App extends Component {
    constructor() {
        super()
        this.state = {
            logedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                logedIn: !prevState.logedIn
            }
        })
    }

    render() {
        return (
            <div>
            <h1>
                The user is loged {this.state.logedIn ?
                <span>in.</span> :
                <span>out.</span>
                }
            </h1>
            <button onClick = {this.handleClick}>
                {this.state.logedIn ?
                <span>Logout</span> :
                <span>Login</span>
                }
            </button>
            </div>
        )
    }

}



//36:
class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return(
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}



//34:

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        //get the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.whatever !== this.props.whatever) {
            //do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true if want it to update
        //return false if not
    }

    componentWillUnmount() {
        //teardown or cleanup your code before your component disapears
        //(e.g. remove event listeners)
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}



//33:
class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todolist = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} onChange = {this.handleChange}/>)
        return (
            <div>
                {todolist}
            </div>
        )
    }
}

// 32:

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}


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


// 28

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false
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
            //v.1
            //<h2>You are currently logged {wordToDisplay}.</h2>
            //v.2
            <h2>You are currently logged {this.state.loggedIn ? "in":"out"}.</h2>
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
