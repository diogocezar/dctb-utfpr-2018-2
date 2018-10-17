import React, {Fragment} from 'react';
import './Intro.css';

const Intro = (props) => {
    return (
        <Fragment>
            <h2>{props.value}</h2>
            <h4>{props.value2}</h4>
            <p>{props.value3}</p>
        </Fragment>
    );
}

export default Intro;