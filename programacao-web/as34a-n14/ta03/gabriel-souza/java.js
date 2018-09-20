const URL_TO_FETCH = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(URL_TO_FETCH, {
    method: 'get'
})
.then(function(result){
    result.json().then( (aux) => resultHtml(aux));
})
function resultHtml(data){
    setBazar(data);
    setProducts(data);
}

function setBazar(data){
    var BazarContainer = document.getElementById('bazar-container');
    var StringBazar = '';

    StringBazar += "<h1>" + data.configs.title + "</h1>";
    StringBazar += "<h2>" + data.configs.subTitle + "</h2>";
    StringBazar += "<p>" + data.configs.email + "</p>";
    StringBazar += "<p>" + data.configs.phone + "</p>";
    StringBazar += "<p>" + data.configs.description[0].p + "</p>";
    StringBazar += "<p>" + data.configs.description[1].p + "</p>";
    StringBazar += "<h2>" + data.configs.description[2].h2 + "</h2>";
    StringBazar += "<p>" + data.configs.description[3].p + "</p>";

    BazarContainer.innerHTML = StringBazar;
}

function setProducts(data){
    var ProductsContainer = document.getElementById('products-container');
    var stringProducts = '';

    for(let x = 0; x < data.products.length; x++){
        stringProducts += "<div class=\"produtos\">";
        stringProducts += "<h4>" + data.products[x].name + "</h4>";
        stringProducts += "<img src=" + data.products[x].image + ">"
        stringProducts += "<div>";

        for(let y = 0; y < data.products[x].description.length; y++){
            
            if(data.products[x].description[y].p){
                stringProducts += "<p> " + data.products[x].description[y].p + "</p>";
            }
            else{
                stringProducts += "<h4>" + data.products[x].description[y].h4 + "</h4>";
            }
        }
        stringProducts += "<p><b>Valor:</b> R$" + data.products[x].price + "</p>";
        ProductsContainer.innerHTML = stringProducts;
    }
}