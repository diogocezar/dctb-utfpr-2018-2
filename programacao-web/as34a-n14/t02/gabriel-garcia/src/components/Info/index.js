import React, { Component, Fragment } from 'react';
import './Info.css';

const Info = function () {
    return <Fragment>
        <section id="info">
            <div class="info-column">
                <h2>Biografia</h2>
                <p>Ingressei na UTFPR no segundo semestre de 2016, e desde esse momento a minha vida mudou completamete, o simples fato de uma area ser imensamente grande não explica a sede de conhecimento que a area de computação te proporciona, os varios métodos de resolver problemas me fez estudar o que eu nem sabia que era possivel se estudar, e eu ainda nem comecei ...</p>
            </div>
            <div class="info-column">
                <h2>Profissão</h2>
                <p>Quando eu entrei na Universidade, logo me apareceu a oportunidade de trabalhar na minha area como estagiário (o qual muitos tem preconceito), hoje faz quase 2 anos que trabalho com desenvolvimento no setor publico.</p>
            </div>
        </section>
    </Fragment>;
}

export default Info;