import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={props.handleChange}
                    value={props.data.firstName}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange}
                    value={props.data.lastName}
                />
                <br />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                    value={props.data.age}
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        checked={props.data.gender === "Male"}
                        onChange={props.handleChange}
                        value="Male"
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        checked={props.data.gender === "Female"}
                        onChange={props.handleChange}
                        value="Female"
                    /> Female
                </label>
                <br />
                <label>
                    Location:
                </label>
                <select
                    type="checkbox"
                    name="location"
                    onChange={props.handleChange}
                    value={props.data.location}
                >
                    <option value="">--click to choose</option>
                    <option value="Sahara Desert">Sahara Desert</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="USA">USA</option>
                </select>
                <br />
                <label>
                    Dietary restrictions:
                    <br />
                    <label>
                        <input
                            //no value parameter
                            type="checkbox"
                            name="kosher"
                            onChange={props.handleChange}
                            checked={props.data.kosher}
                        /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input
                            //no value parameter
                            type="checkbox"
                            name="vegetarian"
                            onChange={props.handleChange}
                            checked={props.data.vegetarian}
                        /> Vegetarian?
                    </label>
                    <br />
                    <label>
                        <input
                            //no value parameter
                            type="checkbox"
                            name="lactoseFree"
                            onChange={props.handleChange}
                            checked={props.data.lactoseFree}
                        /> Lactose free?
                    </label>
                </label>
                <br />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default FormComponent
