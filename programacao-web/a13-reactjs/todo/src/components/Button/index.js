import React from 'react'
import './Button.css'

const Button = (props) => {
    return <button className="button-component">{props.value}</button>;
}

export default Button