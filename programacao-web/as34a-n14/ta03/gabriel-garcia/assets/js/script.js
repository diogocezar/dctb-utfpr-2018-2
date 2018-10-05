const url = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(url, {
    method: 'get'
}).then(function (result) {
    result.json().then((aux) => resultHtml(aux));
}).catch(function (err) {
    console.error('ERRO', err);
});

function resultHtml(data) {
    setConfig(data);
    setProduct(data);
}

function setConfig(data) {
    var config = document.getElementById('configs-container');
    var htmlConfig = '';

    htmlConfig += "<h1>" + data.configs.title + "</h1>";
    htmlConfig += "<h2>" + data.configs.subTitle + "</h2>";
    htmlConfig += "<p>" + data.configs.email + "</p>";
    htmlConfig += "<p>" + data.configs.phone + "</p>";
    htmlConfig += "<p>" + data.configs.description[0].p + "</p>";
    htmlConfig += "<p>" + data.configs.description[1].p + "</p>";
    htmlConfig += "<h2>" + data.configs.description[2].h2 + "</h2>";
    htmlConfig += "<p>" + data.configs.description[3].p + "</p>";

    config.innerHTML = htmlConfig;
}

function setProduct(data) {
    var productsContainer = document.getElementById('products-container');
    var products = '';

    for (let i = 0; i < data.products.length; i++) {
        if(data.products[i].active === true){
            products += "<div class='content'>";
        } else {
            products += "<div class='content inactive'>";
        }
        
        products += "<h4 class='title'>" + data.products[i].name + "</h4>";
        products += "<img src=" + data.products[i].image + ">";
        products += "<div>";

        for (let x = 0; x < data.products[i].description.length; x++) {

            if (data.products[i].description[x].p) {
                products += "<p>" + data.products[i].description[x].p + "</p>";
            }
            else {
                products += "<h4 class'subtitle'>" + data.products[i].description[x].h4 + "</h4>";
            }
        }
        products += "<p><h5>R$ " + data.products[i].price + ",00</h5></p></div>";
        products += "<button class='btn'>COMPRAR</button></div>"
        productsContainer.innerHTML = products;
    }
}