const URL_TO_FETCH = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(URL_TO_FETCH, {
    method: 'get'
})
.then(function(response){
    response.json().then( (e) => populateHtml(e));
})
.catch(function(err){
    console.error('Failed retrieving information', err);
});

function populateHtml(data){

    populateHeader(data);
    populateProduct(data);
}

function populateHeader(data){
    var infoContainer = document.getElementById('info-container');
    var htmlStringInfo = '';

    htmlStringInfo += "<h2>" + data.configs.subTitle + "</h2>";
    htmlStringInfo += "<p>" + data.configs.email + "</p>";
    htmlStringInfo += "<p>" + data.configs.phone + "</p>";
    htmlStringInfo += "<p>" + data.configs.description[0].p + "</p>";
    htmlStringInfo += "<p>" + data.configs.description[1].p + "</p>";
    htmlStringInfo += "<h2>" + data.configs.description[2].h2 + "</h2>";
    htmlStringInfo += "<p>" + data.configs.description[3].p + "</p>";

    infoContainer.innerHTML = htmlStringInfo;
}

function populateProduct(data){
    var stringProduct = '';
    for(let i = 0; i < data.products.length; i++){
        stringProduct += "<div class=\"product\">";

        stringProduct += "<h4>" + data.products[i].name + "</h4>";
        stringProduct += "<img src=" + data.products[i].image + ">"
        
        stringProduct += "<div>";
        for(let y = 0; y < data.products[i].description.length; y++){
            
            if(data.products[i].description[y].p){
                stringProduct += "<p>" + data.products[i].description[y].p + "</p>";
            }
            else{
                stringProduct += "<h4>" + data.products[i].description[y].h4 + "</h4>";
            }
        }
        stringProduct += "</div>";

        stringProduct += "<p>  Preço: R$" + data.products[i].price + "</p>";

        stringProduct += "</div>";
    }
    document.getElementById("product-container").innerHTML = stringProduct;
}


