import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './componets/main'
import {Link, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title=" " scroll>
            <Navigation>
                <a href="/principal">Home</a>
                <a href="/sobre">Sobre</a>
                <a href="/projeto">Projetos</a>
                <a href="/contato">Contato</a>
                <a href="/blog">Blog</a>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
                <a href="/principal">Home</a>
                <a href="/sobre">Sobre</a>
                <a href="/projeto">Projetos</a>
                <a href="/contato">Contato</a>
                <a href="/blog">Blog</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
