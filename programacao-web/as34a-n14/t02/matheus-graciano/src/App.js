import React, { Component } from "react";
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';
import Skills from './ui/Skills';


class App extends Component{
  render(){
    return (
      <div className="container">
        <NavBar />
        <Perfil />
        <Skills />
      </div>
    );
  }
} 

export default App;
