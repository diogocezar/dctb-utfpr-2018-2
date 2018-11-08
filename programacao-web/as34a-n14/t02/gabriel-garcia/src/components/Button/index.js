import React from 'react'
import './Button.css'

const Button = (props) => {
    return <button onClick={props.onClick} className="button-component">{props.value}</button>;
}

export default Button