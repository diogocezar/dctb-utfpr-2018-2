import React, {Fragment} from 'react';
import './Geral.css';

const Footer = (props) => {
    return (
        <Fragment>
            <footer id="main-footer">
                <div id="footer-bottom">
                    <div className="container clearfix">
                        <p id="footer-info"><strong>{props.name}</strong>{props.curso}<br/> <strong>{props.email}</strong>{props.provedor}<br/>{props.tel}</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;