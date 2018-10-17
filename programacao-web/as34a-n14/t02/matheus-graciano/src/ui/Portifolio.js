import React, {Fragment} from 'react';
import Intro from './Intro';
import './Portifolio.css';
import Works from './Works';
import img1 from './assets/cuda.jpg';
import img2 from './assets/procobaja.png';
import img3 from './assets/abrindoportas.jpeg';

const Portifolio = () => {
    return (
        <section id='portifolio'>
            <Intro value="PORTIFÓLIO" value2="TRABALHOS" value3="Alguns dos trabalhos desenvolvidos por mim durante o curso:"/>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <Works img={img1} description="Iniciação Científica: Algoritmos Genéticos aplicados ao problema do caixeiro viajante e Paralelização com Linguagem CUDA."/>
                        <Works img={img2} description="Participação no Projeto de Extensão Procobaja, produção de carros para competição no BAJA SAE."/>
                        <Works img={img3} description="Integrante do Projeto de Extensão Abrindo Portas no ensino de Inglês para jovens de escolas públicas."/>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Portifolio;