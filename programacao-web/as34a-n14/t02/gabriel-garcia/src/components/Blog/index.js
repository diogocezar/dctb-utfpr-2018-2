import React, { Component, Fragment } from 'react';
import './Blog.css';

const Blog = function () {
    return <Fragment>
        <section id="blog">
            <h2>Blog</h2>
            <div id="post-container">
                <div class="post">
                    <a href="http://www.computersciencemaster.com.br/2018/09/learntoimplement-javascript.html" target="_blank">
                        <h3>LEARNTOIMPLEMENT - JAVASCRIPT</h3>
                        <p>O projeto LearnToImplement feito em JavaScript CRUD simples, single page application criado com HTML5, CSS e Javascript. </p>
                    </a>
                </div>
                <div class="post">
                    <a href="http://www.computersciencemaster.com.br/2018/10/aula-04-adicionando-movimento-logica-com-javascript.html" target="_blank">
                        <h3>ADICIONANDO MOVIMENTO (LÓGICA) COM JAVASCRIPT</h3>
                        <p>
                            Mesmo utilizando o html para demarcação da estrutura das páginas e também o CSS para estilizar o FRONT-END não é completo sem a utilização do javascript ...
                        </p>
                    </a>
                </div>
                <div class="post">
                    <a href="http://www.computersciencemaster.com.br/2018/07/learntoimplement-java-fx.html" target="_blank">
                        <h3>LEARNTOIMPLEMENT - JAVA [FX]</h3>
                        <p>O projeto LearnToImplement feito em JAVA FX será uma Sistema de gerenciamento de concessionárias (vendas de carros).</p>
                    </a>
                </div>
            </div>
        </section>
    </Fragment>;
}

export default Blog;