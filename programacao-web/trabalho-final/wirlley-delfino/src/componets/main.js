import React from 'react';
import Principal from './principal';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from './blog';
import Contato from './contato';
import Projeto from './projeto';
import Sobre from './sobre';
const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/principal" component ={Principal} />
			<Route path="/sobre" component ={Sobre} />
			<Route path="/projeto" component ={Projeto} />
			<Route path="/contato" component ={Contato} />
			<Route path="/blog" component ={Blog} />
		</Switch>
	</BrowserRouter>
)

export default Main;