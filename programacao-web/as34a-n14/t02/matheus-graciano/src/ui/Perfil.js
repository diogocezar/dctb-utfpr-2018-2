import React from 'react';
import foto from './foto.jpg';
import curriculo from './Currículo K.pdf';
import './Geral.css';
import lamp from './assets/lamp.png';
import idioms from './assets/idioms.png';
import formation from './assets/site-map.png';
import activities from './assets/settings-tools.png';
import { relative } from 'path';

const Perfil = () => {
    return(
        <section id="perfil">
        <div className="container" style={{marginTop: 100}}>
            <div className="row">
                <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                    <img src={foto} width="500" height="500"/>
                    <p style={{paddingTop: 50}}>Olá, sou <strong>Matheus Silvano Graciano</strong>. Estudante de Engenharia da Computação, nascido em Angatuba-SP, atualmente morando em Cornélio Procópio-PR.</p>
                    <a href={curriculo} target="_blank" download="Currículo-K.pdf"><button>CURRÍCULO COMPLETO</button></a>
                </div>
                <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                    <h1 style={{paddingBottom:"50px"}}>MATHEUS SILVANO GRACIANO</h1>
                    <div className="interesses" style={{paddingTop:"10px"}}>
                        <span style={{position:relative}}><img src={lamp}  style={{position:relative, paddingRight:"10px"}} />INTERESSES</span>
                        <ul style={{paddingTop:"10px"}}>
                            <li>Inteligência Artificial</li>
                            <li>Banco de Dados</li>
                            <li>Desenvolvimento Front-End</li>
                        </ul>
                    </div>
                    <div className="idiomas" style={{paddingTop:"10px"}}>
                        <span style={{position:relative}}><img src={idioms}  style={{position:relative, paddingRight:"10px"}} />IDIOMAS</span>
                        <ul style={{paddingTop:"10px"}}>
                            <li>Português - Nativo</li>
                            <li>Inglês - Avançado</li>
                        </ul>
                    </div>
                    <div className="formation" style={{paddingTop:"10px"}}>
                        <span style={{position:relative}}><img src={formation}  style={{position:relative, paddingRight:"10px"}} />FORMAÇÃO</span>
                        <ul style={{paddingTop:"10px"}}>
                            <li>2019(UTFPR)- Bacharelado em Engenharia da Computação</li>
                            <li>2014(SENAI) - Técnico em Mecatrônica</li>
                            <li>2014(SESI) - Ensino Médio</li>
                        </ul>
                    </div>
                    <div className="idiomas" style={{paddingTop:"10px"}}>
                        <span style={{position:relative}}><img src={activities}  style={{position:relative, paddingRight:"10px"}} />ATIVIDADES</span>
                        <ul style={{paddingTop:"10px"}}>
                            <li>Estudante</li>
                            <li>Futuro Estagiário</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Perfil;