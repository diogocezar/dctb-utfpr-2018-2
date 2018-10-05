const url = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(url, {
    method: 'get'})
	.then(function (result) {result.json().then((aux) => resultHtml(aux));})
	.catch(function (err) {
    console.error('ERRO', err);});

function resultHtml(data) {
    setProduct(data);
}

function setProduct(data) {
    var productsContainer = document.getElementById('container-products');
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