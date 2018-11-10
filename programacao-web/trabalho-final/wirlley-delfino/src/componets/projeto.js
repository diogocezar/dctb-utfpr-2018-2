import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Projeto extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
	}

	toggleCategories(){
	if(this.state.activeTab === 0){
		return(
			<div className="projeto-grid">
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '250px', background:'url(https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/45614125_772581953090483_5373747193947619328_n.jpg?_nc_cat=106&_nc_ht=scontent.fbfh3-1.fna&oh=41a91118746950db09b95b94acf66a74&oe=5C3C1976) center / cover' }}> Bob's Tarven</CardTitle>
					<CardText>
						Bobstavern é um jogo desenvolvido em Netbeans onde o jogador é dono de uma taverna. Assim, afim de lucrar mais e buscar o rank 1 entre os tavernistas, nosso jogador terá que bolar planos para aumentar seus lucros.
					</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
						<Button colored>Youtube</Button>
					</CardActions>
				</Card>

				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '250px', background:'url(https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/45717889_772581943090484_3004276980137852928_n.jpg?_nc_cat=107&_nc_ht=scontent.fbfh3-1.fna&oh=e3c0e227bdf16c904b8d342fa125441f&oe=5C79C7BF) center / cover' }}> Emvólio</CardTitle>
					<CardText>
						Emvólio é um sistema desenvolvido em java que visa gerenciar o sistema de vácinas brasileiro, uma vez que, tal gerenciamento ainda é feito a partir de carteiras de vacinas.
					</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
					</CardActions>
				</Card>
			</div>

			)
		}	
	}

	
	render(){
		return(
				<div className="category-tabs">
					<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTabe: tabId})} ripple>
					<Tab>NetBeans</Tab>
					</Tabs>

						<Grid>
							<Cell col={12}>
								<div className="content">{this.toggleCategories()}</div>
							</Cell>
						</Grid>
				</div>
			)
	}
}
export default Projeto;