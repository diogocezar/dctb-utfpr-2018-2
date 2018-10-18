import React, {Fragment} from 'react';
import Intro from './Intro';
import News from './News';
import './Blog.css';

const Blog = () => {
    return (
        <Fragment>
            <section id="blog">
                <Intro value="BLOG" value2="TECNOLOGIA" value3="Algumas notícias sobre tecnologia:" />
                <div className="Container">
                    <div className="card-deck mb-3 text-center" style={{paddingLeft:"30px", paddingRight:"30px"}}>
                        <News title="Twitter" date="17/10/2018" author="Daniel Junqueira" description="Twitter libera arquivo com 10 milhões de posts usados para manupulação política"/>
                        <News title="TBGS 2018" date="14/10/2018" author="Anônimo" description="PC gamers 'monstruosos' roubam a cena na feira de jogos."/>
                        <News title="Intel" date="10/10/2018" author="Daniel Junqueira" description="Novos processadores da Intel chegam nas pŕoximas semansa no Brasil."/>
                    </div>
                </div>
                
            </section>
        </Fragment>
    );
}

export default Blog;