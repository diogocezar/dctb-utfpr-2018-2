import React, {Fragment} from 'react';
import Intro from './Intro';
import './Contact.css';
import Face from './assets/facebook-logo-button.png';
import Link from './assets/linkedin.png';
import Twi from './assets/twitter-logo-silhouette.png';


const Contact = () => {
    return (
        <Fragment>
            <section id="contact">
                <Intro value="CONTATO" value2="ENTRE EM CONTATO" value3="Entre em contato pelo formulário ou pelas redes sociais abaixo."/>
                <div className="container">
                    <form style={{color:"#f2e9e4", padding:"5px"}}>
                        <div className="form-group">
                            <label for="nameform">Nome</label>
                            <input type="name" className="form-control" id="namecontrol" placeholder="Digite seu nome"></input>
                        </div>
                        <div className="form-group">
                            <label for="emailform">E-mail</label>
                            <input type="name" className="form-control" id="emailcontrol" placeholder="Digite seu Email"></input>
                        </div>
                        <div className="form-group">
                            <label for="emailform">Assunto</label>
                            <input type="name" className="form-control" id="emailcontrol" placeholder="Digite o Assunto da Mensagem"></input>
                        </div>
                        <div className="form-group">
                            <label for="mensagemform">Mensagem</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua Mensagem"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-dark">ENVIAR</button>
                    </form>
                </div>
                <div style={{textAlign:"center", paddingBottom:"20px"}} className="container">
                
                    <Intro value2="REDES SOCIAIS" value3="Entre em contato comigo por minhas redes sociais" />
                    <span ><a style={{padding:"5px"}} href="https://www.facebook.com/Krugler9" target="_blank"><img src={Face} /></a><a style={{padding:"5px"}} href="https://twitter.com/Krugler9" target="_blank"><img src={Twi} /></a><a style={{padding:"5px"}} href="https://www.linkedin.com/in/matheus-graciano-112924159/" target="_blank"><img src={Link} /></a></span>
                    
                
                </div>
            </section>
            
        </Fragment>
    );
}

export default Contact;