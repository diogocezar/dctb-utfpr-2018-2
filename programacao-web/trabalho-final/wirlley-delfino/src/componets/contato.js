import React, {Component} from 'react';
import {Grid, Cell, Textfield, Button} from 'react-mdl';
import Me from './me.png';
class Contato extends Component{
	render(){
		return(
				<div className="contact-body">
					<Grid className="contact-grid">
						<Cell col={6}>
							<h2>Wirlley Delfino</h2>
							<img 
								src={Me}
								alt="perfil-foto"
								style={{height: '250px'}}
								/>
								<p>Olá, tenho 23 anos, sou estudante de Engenharia de Software pela Universidade Tecnológia Federal do Paraná no campus de Conélio Procópio.</p>
								
						</Cell>
						<Cell col={6}>
							<h2>Contato</h2>
							<div>
								<Textfield onChange={() => {}} label="Nome" floatingLabel style={{width: '300px'}}/>
								<p/><Textfield onChange={() => {}} label="Email" floatingLabel style={{width: '300px'}}/>
								<p/><Textfield onChange={() => {}} label="Assunto" floatingLabel style={{width: '300px'}}/>
								<p/><Textfield onChange={() => {}} label="Mensagem..." rows={4}  style={{width: '300px'}}/>
								<p/><Button raised accent ripple>Enviar</Button>

							</div>
						</Cell>
					</Grid>
				</div>
			)
	}
}
export default Contato;