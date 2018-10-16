import React, { Component } from "react";
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';


class App extends Component{
  render(){
    return (
      <div className="container">
        <NavBar />
        <Perfil />
      </div>
    );
  }
} 

export default App;
