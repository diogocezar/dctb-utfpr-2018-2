import React, { Component, Fragment } from 'react';
import './Portfolio.css';

const Portfolio = function () {
    return <Fragment>
        <section id="portfolio">
            <h2>Portfólio</h2>
            <div id="portfolio-container">
                <div className="portfolio-proj">
                    <a href="https://github.com/gabriel-hg58/Dog-Control" target="_blank">
                        <div className="portfolio-img img-01"></div>
                        <h2>Sistema de controle Animal</h2>
                    </a>
                </div>
                <div className="portfolio-proj">
                    <a href="https://github.com/gabriel-hg58/IM" target="_blank">
                        <div className="portfolio-img img-02"></div>
                        <h2>Projeto de estágio</h2>
                    </a>
                </div>
                <div className="portfolio-proj">
                    <div className="portfolio-img img-03"></div>
                    <h2>Projeto do meu Site</h2>
                </div>
            </div>
        </section>
    </Fragment>;
}

export default Portfolio;