import React from 'react'
import logoAnimation from '../model/logoAnimation'

function Logo(props) {
    props.preload && logoAnimation()
    return (
        <div>
            <div className="logo">
                <div className="M">m</div>
                <div className="I first">
                    <div className="tItem"></div>
                    <div className="bItem"></div>
                </div>
                <div className="I second">
                    <div className="tItem"></div>
                    <div className="bItem"></div>
                </div>
                <div className="O">o</div>
            </div>
        </div>
    )
}

export default Logo
