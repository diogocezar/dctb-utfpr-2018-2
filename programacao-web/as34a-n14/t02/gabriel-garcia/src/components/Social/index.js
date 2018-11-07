import React, { Component, Fragment } from 'react';
import './Social.css';

const Social = function () {
    return <Fragment>
        <ul id="social">
            <li>
                <a href="https://www.facebook.com/gabriel.hg58" target="_blank">
                    <div id="facebook" className="social-btn"></div>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/gabriel_hg58/" target="_blank">
                    <div id="instagram" className="social-btn"></div>
                </a>
            </li>
            <li id="github" className="social-btn">
                <a href="https://github.com/gabriel-hg58" target="_blank">
                    <div id="github" className="social-btn"></div>
                </a>
            </li>
        </ul>
    </Fragment>;
}

export default Social;