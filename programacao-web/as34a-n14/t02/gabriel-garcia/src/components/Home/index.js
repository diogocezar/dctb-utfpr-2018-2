import React, { Component, Fragment } from 'react';
import './Home.css';
import Button from '../Button';

const Home = function () {
    return <Fragment>
        <section id="home">
            <div id="perfil-image-container">
                <div id="perfil-image"></div>
                <p>Oi, meu nome é Gabriel Garcia, sou um apaixonado pela tecnologia ainda em formação</p>
                <a href="./Curriculo.pdf" target="_blank">
                    <Button value="Currículo"></Button>
                </a>
            </div>
            <ul id="perfil-data">
                <h2>Interesses</h2>
                <li>Machine Learning</li>
                <li>Big Data</li>
                <li>Desenvolvimento Web</li>
                <h2>Idiomas</h2>
                <li>Português - Nativo</li>
                <li>Inglês - Intermediario</li>
                <h2>Formação</h2>
                <li>Ensino Medio - 2015</li>
                <li>Ensino Superior - 2016-Atualmente</li>
                <h2>Atividades</h2>
                <li>Estagiário na Prefeitura Municipal de Sertaneja - 2017-Atualmente</li>
            </ul>
        </section>
    </Fragment>;
}

export default Home;