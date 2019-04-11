import React from 'react'

function Joke(props) {
    return (
        <div>
            <p className = "question"
            //if no question
            style={{display: !props.question && "none"}}>Question is: {props.question}</p>
            <p className = "punchLine"
            //if no question
            style={{color: !props.question && "#ccc"}}>PunchLine is: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke
