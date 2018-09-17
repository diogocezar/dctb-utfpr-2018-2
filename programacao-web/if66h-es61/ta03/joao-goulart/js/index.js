const url = 'https://diogocezar.github.io/bazar/json/database.json';

$(document).ready(() => {

    axios.get(url).then(response => {

        var produtos = response.data.products;
        var config = response.data.configs;

        var configs = montaConfig(config);
        $('#topo').html(configs);

        var html = montaLista(produtos);
        $('#produtos').html(html);

    });


});



function montaLista(produtos) {
    var html = [];
    console.log(produtos)
    html.push('<div class="container"><div class="row">');
    for (var i = 0; i < produtos.length; i++) {

        html.push('<div class="col-sm">');
        html.push('<div class="card" style="width: 18rem;">');
        html.push('<img class="card-img-top" src="' + produtos[i].image + '" alt="Card image cap" />');
        html.push('<div class="card-body">');
        html.push('<h5 class="card-title">' + produtos[i].name + '</h5>');
        for (var j = 0; j < produtos[i].description.length; j++) {
            if (produtos[i].description[j].h4 !== undefined) {
                html.push('<h4 class="card-text">' + produtos[i].description[0].h4 + '</h4>');
            } else {
                html.push('<p class="card-text">' + produtos[i].description[j].p + '</p>');
            }
        }
        html.push('<p class="price">R$ ' + produtos[i].price + ',00</p>');

        if(produtos[i].active) {
            html.push('<button type="button" class="btn btn-outline-dark buy-bt">COMPRAR</button>');
        } else {
            html.push('<button type="button" disabled="disabled" class="btn btn-outline-dark buy-bt">ESGOTADO</button>');
        }
        html.push(' </div>  </div> </div> ');
    }
    html.push('</div></div>');

    return html.join("");

}

function montaConfig(config) {
    var html = [];
    html.push('<div class="container">');
    html.push('<h1 id="title">' + config.title + '</h1>');
    html.push('<h2 id="substitle">' + config.subTitle + '</h2>');
    html.push('<p id="email"><a href="mailto:' + config.email + '">' + config.email + '</a></p>');
    html.push('<p id="whats"><a href="tel:' + config.phone + '">' + config.phone + '</a></p>');
    html.push('<div id="description">');
    for (var i = 0; i < config.description.length; i++) {
        if (config.description[i].h2 !== undefined) {
            html.push('<h2>' + config.description[i].h2 + '</h2>');

        } else {
            html.push('<p>' + config.description[i].p + '</p>');
        }
    }
    html.push('</div></div>');


    return html.join("");
}