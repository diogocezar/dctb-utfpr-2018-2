import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Hability from './components/Hability';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Info from './components/Info';
import Social from './components/Social';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <Fragment>
      <Header></Header>
      <Home></Home>
      <Hability></Hability>
      <Blog></Blog>
      <Portfolio></Portfolio>
      <Info></Info>
      <Form></Form>
      <Social></Social>
      <Footer></Footer>
    </Fragment>;
  }
}

export default App