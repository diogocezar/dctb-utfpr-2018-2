import React, {Fragment} from 'react';
import Intro from './Intro';
import './Information.css';
import Bio from './assets/file-sharing.png';
import Future from './assets/analytics-laptop.png';
import Git from './assets/git1.png';

const Information =() => {
    return (
        <Fragment>
            <section id="information">
                <Intro value="MAIS INFORMAÇÕES" value2="OUTRAS INFORMAÇÕES SOBRE MIM" value3="Esperar é suicídio lento"/>
                <div className="container">
                    <div className="row">
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <span style={{color:"#f2e9e4"}}><img style={{marginRight:"5px"}} src={Bio} width="32" height="32"/>BIOGRAFIA</span>
                            <p style={{textAlign: "justify", color:"#f2e9e4", marginLeft:"37px"}}> Em 2013 iniciei meu curso de Mecatrônica no SENAI/SOROCABA-SP e encontrei uma afinadade e satisfação durante o desenvolvimento eletrônico e as aulas de programação, desta maneira buscando suprir essa necessidade encontrei o curso de Engenharia da COmputação e em 2015 iniciei minha graduação na UTFPR/CP, dentro da universidade trabalhei com Iniciação Ciêntífica na área de Algoritmos Genéticos e paralelização na linguagem CUDA. Atualmente estou desenvolvendo habilidades e pesquisando novas tecnologias e áreas para iniciar meu trabalho de conclusão de curso e também buscando estágios na área de computação.</p>
                        </div>
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <span style={{color:"#f2e9e4"}}><img style={{marginRight:"5px"}} src={Future} width="32" height="32"/>FUTURO</span>
                            <p style={{textAlign: "justify", color:"#f2e9e4", marginLeft:"37px"}}>Daqui 5 anos ambiciono estar em um emprego que me faça adorar as Segundas-Feiras, desenvolvendo projetos relevantes para a empresa e para a área, feliz e confiante nas minhas habilidades e o mais importante, conseguir visualizar meu futuro, prever um crescimento, um próximo passo a seguir e estar trabalho para alcançar esse objetivo. Quero deixar minha marca no mundo de alguma maneira, seja no trabalho, no jeito de solucionar problemas ou na metodologia aplicada, quero fazer parte de algo maior e sentir que sou necessário para o meio em que estou inserido.</p>
                        </div>
                    </div>
                 </div>
                 <div style={{textAlign:"center"}}>
                    <a href="https://github.com/matheusgraciano" target="_blank"><img  src={Git} width="64" height="64" /></a>
                 </div>
                 <div className="container">
						<h4><a style={{textDecoration:"none", color:"#f2e9e4"}} href="https://github.com/matheusgraciano" target="_blank">GITHUB</a></h4>
                        <p style={{textAlign:"center"}}>Veja alguns dos meus projetos no GitHub.</p>
					</div>
            </section>
            
        </Fragment>
    );
}

export default Information;