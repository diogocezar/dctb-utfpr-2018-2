import React, {Fragment} from 'react';

const Works = (props) => {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" style={{height:"225px", width:"100%", display:"block"}} src={props.img}/>
                    <div class="card-body">
                         <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Works;