import React, { Component, Fragment } from 'react';
import './Header.css'

const Header = function () {
    return <Fragment>
        <header>
            <ul id="btn-container">
                <li className="header-btn">
                    <a className="btn-link" href="#home">Inicio</a>
                </li>
                <li className="header-btn">
                    <a className="btn-link" href="#hability">Habilidades</a>
                </li>
                <li className="header-btn">
                    <a className="btn-link" href="#blog">Blog</a>
                </li>
                <li className="header-btn">
                    <a className="btn-link" href="#portfolio">Portfólio</a>
                </li>
                <li className="header-btn">
                    <a className="btn-link" href="#info">Info</a>
                </li>
                <li className="header-btn">
                    <a className="btn-link" href="#send-message">Contato</a>
                </li>
            </ul>
        </header>
    </Fragment>;
}

export default Header;