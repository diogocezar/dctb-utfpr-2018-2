var cabecalho = document.getElementById("cabecalho");
var produtos = document.getElementById("produtos");

var request = new XMLHttpRequest();
request.open('GET', 'https://diogocezar.github.io/bazar/json/database.json');
request.onload = function(){
    var dados = JSON.parse(request.responseText);
    carregar(dados);
};
request.send();

function carregar(data){
    var StringCabecalho = "";
    var StringProdutos = "";

    StringCabecalho += "<h1>" + data.configs.title + "</h1>";
    StringCabecalho += "<h2>" + data.configs.subTitle + "</h2>";
    StringCabecalho += "<p>" + data.configs.email + "</p>";
    StringCabecalho += "<p>" + data.configs.phone + "</p>";

    StringCabecalho += "<p>" + data.configs.description[0].p + "</p>";
    StringCabecalho += "<p>" + data.configs.description[1].p + "</p>";
    StringCabecalho += "<h2>" + data.configs.description[2].h2 + "</h2>";
    StringCabecalho += "<p>" + data.configs.description[3].p + "</p>";

    for(i = 0; i < data.products.length; i++){
        StringProdutos += "<div class='col-lg-4'>";
        StringProdutos += "<h2>" + data.products[1].name + "</h2>";
        StringProdutos += "<img src =" + data.products[i].image + ">";
        for(j = 0; j < data.products[i].description.length; j++){
            if(data.products[i].description[j].p){
                StringProdutos += "<p>" + data.products[i].description[j].p + "</p>";
            }
            else{
                StringProdutos += "<h4>" + data.products[i].description[j].h4 + "</h4>";
            }
        }
        StringProdutos += "<h2>Preço: R$" + data.products[i].price + "</h2>";
        StringProdutos += "</div>";
    }

    cabecalho.innerHTML = StringCabecalho;
    produtos.innerHTML = StringProdutos;
}