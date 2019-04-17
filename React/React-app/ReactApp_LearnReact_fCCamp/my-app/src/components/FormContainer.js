import React, {Component} from 'react'
import FormComponent from './FormComponent.js'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            kosher: false,
            vegetarian: false,
            lactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}): this.setState({[name]: value})
    }

    handleSubmit() {
        let list = []
        if(this.state.kosher) {
            list.push("Kosher")
        }
        if(this.state.vegetarian) {
            list.push("Vegetarian")
        }
        if(this.state.lactoseFree) {
            list.push("Lactose Free")
        }
        alert(
            "First Name: " + this.state.firstName +
            "\nLast Name: " + this.state.lastName +
            "\nAge: " + this.state.age +
            "\nGender: " + this.state.gender +
            "\nLocation: " + this.state.location +
            "\nDietary restrictions: " + list.join(", ")
        )
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
             />
        )
    }
}

export default Form
