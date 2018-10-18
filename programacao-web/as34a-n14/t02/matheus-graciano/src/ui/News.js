import React, {Fragment} from 'react';

const News = (props) => {
    return (
        <Fragment>
            <div style={{margin:"5px"}} className="card mb-4 shadow-sm" >
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{props.title}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{props.date} <small class="text-muted">{props.author}</small></h1>
                    <p>{props.description}</p>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Veja na Integra</button>
                </div>
            </div>
        </Fragment>
    );
}

export default News;

