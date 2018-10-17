import React, {Fragment} from 'react';
import './Geral.css';
import Intro from './Intro';

const Skills = () => {
    return (
        <Fragment>
            
            <section id="skills">
            <Intro value="Skills" value2="Tecnologias e Conhecimentos" value3="Conheça algumas das minhas habilidades profissionais:"/>
            <ul>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>C</li>
                <li>Desenvolvimento Android</li>
                <li>C#</li>
                <li>Unity</li>
                <li>Programação Paralela</li>
                <li>Linguagem Cuda</li>
                <li>Inteligência Artificial</li>
            </ul>

        </section>
        </Fragment>
        
    );
}

export default Skills;