import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';
import Formacao from './formacao';

class Sobre extends Component{
	render(){
		return(
				<div>
				
				<Cell className="sobre" col={12}>
					<hr style = {{borderTop: '3px solid #e22p47'}}/>
					<h2> Formação</h2>
					<Formacao 
					startYear={2015}
					endYear={2019}
					schoolName="Universidade Tecnológica Federal do Paraná"
					schoolDescription="Engenharia de Software"
					
					
					/>
					<Formacao 
					startYear={2009}
					endYear={2012}
					schoolName="MicroWay"
					schoolDescription="Técnico em hardware"
					/>
					<Formacao 
					startYear={2008}
					endYear={2012}
					schoolName="Etec Monsenhor Antonio Mogliano "
					schoolDescription="Técnico em Informática"
					/>
					<hr style = {{borderTop: '3px solid #e22p47'}}/>
					<h2>Biografia</h2>
					<p>Meu nome é Wirlley de Oliveira Delfino, tenho 23 anos, nascido e criado no estado de Minas Gérias. Em 2009 iniciei estudos voltados para área de informática e desde então decidi seguir carreira. Atualmente estudo na UTFPR no campus de Cornélio Procópio o curso de Engenharia de Software.</p>
					<hr style = {{borderTop: '3px solid #e22p47'}}/>
					<h2>Meu contato com a profissão</h2>
					<p>Desde criança tive meu primeiro computador, antes mesmo de haver internet, com isso ficava brincando de programar artes avançadas no paint. Na medida em que fui obtendo jogos de computadores, sempre estava a procurar modos de burlar o jogo achando falhas. Em 2009 iniciei estudos na área de informática e hardware. E hoje, sigo meus estudos para formação em Engenharia de Software.</p>
				
					<hr style = {{borderTop: '3px solid #e22p47'}}/>
					<h2>Idioma</h2>
					<h4 style={{marginLeft: '15px'}}>Português</h4>
					<p>Nativo</p>
					<h4 style={{marginLeft: '15px'}}>Inglês</h4>
					<p>Intermediário</p>
					<hr style = {{borderTop: '3px solid #e22p47'}}/>
					<h2>Habilidades</h2>
					<p>Java</p> <ProgressBar progress={60} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>C:</p> <ProgressBar progress={85} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>C#:</p> <ProgressBar progress={70} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>HTML:</p> <ProgressBar progress={90} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>CSS:</p> <ProgressBar progress={85} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>Bootstrap:</p> <ProgressBar progress={40} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>React:</p> <ProgressBar progress={45} style={{marginLeft: '105px'}}/>
					<p style={{marginTop: '25px'}}>JavaScript:</p> <ProgressBar progress={35} style={{marginLeft: '105px', marginBottom: '0px'}}/>
				</Cell>
				</div>
			)
	}
}
export default Sobre;