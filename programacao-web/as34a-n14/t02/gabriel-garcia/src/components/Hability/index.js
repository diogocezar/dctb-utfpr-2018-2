import React, { Component, Fragment } from 'react';
import './Hability.css';

const Hability = function () {
    return <Fragment>
        <section id="hability">
            <h2>Habilidades</h2>
            <div id="hability-container">
                <p className="skill">AWS EC2</p>
                <p className="skill">JAVA</p>
                <p className="skill">CSS3</p>
                <p className="skill">JavaScript</p>
                <p className="skill">MySQL</p>
                <p className="skill">NodeJS</p>
                <p className="skill">PostgreSQL</p>
                <p className="skill">Instagram API</p>
                <p className="skill">JSF</p>
                <p className="skill">Photoshop</p>
            </div>
        </section>
    </Fragment>;
}

export default Hability;