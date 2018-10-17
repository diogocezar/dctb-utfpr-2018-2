import React, { Component } from "react";
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';
import Skills from './ui/Skills';
import Blog from './ui/Blog';
import Portifolio from './ui/Portifolio';
import Footer from './ui/Footer';


class App extends Component{
  render(){
    return (
      <div className="container">
        <NavBar />
        <Perfil />
        <Skills />
        <Blog />
        <Portifolio />
        <Footer name="Matheus Silvano Graciano " curso="Engenharia da Computação" email="krugler9" provedor="@gmail.com" tel="+55 (15) 997050297"/>
      </div>
    );
  }
} 

export default App;
