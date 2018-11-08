import React, { Component, Fragment } from 'react';
import './Form.css';
import Button from '../Button';

const Form = function () {
    return <Fragment>
        <section id="send-message">
            <form id="form-container" action="https://formspree.io/gabriel_hg58@hotmail.com" method="POST">
                <input className="input" placeholder="Nome" type="text" required="true" />
                <input className="input" placeholder="Email" type="email" required="true" />
                <input className="input" placeholder="Assunto" type="text" required="true" />
                <textarea id="input-area" placeholder="Mensagem" required="true" rows="7"></textarea>
                <Button value="Enviar" type="submit"></Button>
            </form>
        </section>
    </Fragment>;
}

export default Form;