import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Me from './me.png';


class Principal extends Component{
	render(){
		return(
				<div style={{width: '100%', margin: 'auto'}}>
					<Grid className="principal-grid">
						<Cell col={12}>
							<img
								src={Me}
								alt="foto-perfil"
								className="perfil-foto" 
							/>
							<div className="banner-text">
								<h1>Estudante de Engenharia de Software</h1>
								<hr/>
								<p> C | Java | SQLServer | MySql | Android Studio | C#</p>
								<div className="social-links">
									<a href="https://www.facebook.com/wirlley.delfino" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-facebook-square" aria-hidden="true"/>
									</a>
									
									<a href="https://github.com/wirlleyd" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-github-square" aria-hidden="true"/>
									</a>
								</div>

							</div>
							
						</Cell>
					</Grid>
				</div>
			)
	}
}
export default Principal;
