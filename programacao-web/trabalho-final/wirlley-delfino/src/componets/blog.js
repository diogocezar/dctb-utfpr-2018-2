import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Blog extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
	}

	toggleCategories(){
	if(this.state.activeTab === 0){
		return(
			<div className="blog-grid">
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#ffff', height: '300px', background:'url(https://abrilveja.files.wordpress.com/2018/05/economia-samsung-dobravel-20180507-001-1.jpg) center / cover' }}>Samsung mostra celular dobrável para desenvolvedores</CardTitle>
					<CardText>
						Tecnologia juntará as vantagens do tamanho de um telefone compacto com uma tela de maior superfície e dobrável, explicou a empresa; produto ainda não tem data de lançamento.
					</CardText>
					<CardActions border>
						<Button colored href="https://g1.globo.com/economia/tecnologia/noticia/2018/11/08/samsung-mostra-celular-dobravel-para-desenvolvedores.ghtml" target="_blank">Link</Button>
					</CardActions>
				</Card>

				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '300px', background:'url(https://s2.glbimg.com/cj0Uxz2e-m03HJ43uyJtfXW5JXI=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/P/0/UQRlAGT7KUsn10o3vmSQ/facebook-eleicoeseua.jpg) center / cover' }}> Facebook bloqueia contas antes do início da eleição legislativa nos EUA.</CardTitle>
					<CardText>
						Contas do Instagram também foram tiradas do ar horas antes dos eleitores começarem a votar nas 'midterms', as eleições de meio de mandato nos Estados Unidos.
					</CardText>
					<CardActions border>
						<Button colored href="https://g1.globo.com/economia/tecnologia/noticia/2018/11/06/contas-no-facebook-e-instagram-sao-bloqueadas-na-vespera-das-legislativas-nos-eua.ghtml" target="_blank">Link</Button>
					</CardActions>
				</Card>

				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '300px', background:'url(https://s2.glbimg.com/uZzmfnBWwrYK_RWsH-NEj---3zI=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/Q/S/i2ZAd5QD2G9jW3XwtFGQ/i7-920.jpg) center / cover' }}> Especialistas encontram nova brecha em recursos que acelera processadores</CardTitle>
					<CardText>
						Virtualização oferecida pelos recursos de Hyper Threading e Simultaneous Multithreading pode vazar dados para outros aplicativos no computador.
					</CardText>
					<CardActions border>
						<Button colored href="https://g1.globo.com/economia/tecnologia/blog/altieres-rohr/post/2018/11/05/especialistas-encontram-nova-brecha-em-recursos-que-acelera-processadores.ghtml" target="_blank">Link</Button>
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
					<Tab>Tecnologias</Tab>
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
export default Blog;
