var bazarHeader = document.getElementById("header");
var bazarInformation = document.getElementById("information");
var bazarProducts = document.getElementById("product0");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://diogocezar.github.io/bazar/json/database.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();


function renderHTML(data){
    var htmlHeader = "";
    var htmlProducts = "";
    var htmlInformation = "";


    htmlHeader += "<h1>" +data.configs.title+ "</h1>";
    htmlHeader += "<h2>" +data.configs.subTitle+ "</h2>";
    htmlHeader += "<p>" +data.configs.email+ "</p>";
    htmlHeader += "<p>" +data.configs.phone+ "</p>";

    htmlInformation += "<p>" +data.configs.description[0].p+ "</p>"
    htmlInformation += "<p>" +data.configs.description[1].p+ "</p>"
    htmlInformation += "<h2>" +data.configs.description[2].h2+ "</h2>"
    htmlInformation += "<p>" +data.configs.description[3].p+ "</p>"


    for(i=0; i < data.products.length; i++){
        htmlProducts += "<h2>" +data.products[i].name+ "</h2>"
        htmlProducts += "<img src =" +data.products[i].image+ ">"
        for(j=0; j < data.products[i].description.length; j++){
            if(data.products[i].description[j].p){
                htmlProducts += "<p>" +data.products[i].description[j].p+ "</p>"
            }
            else{
                htmlProducts += "<h4>" +data.products[i].description[j].h4+ "</h4>"
            }
        }
        htmlProducts += "<h2>Preço: R$" + data.products[i].price + "</h2>";
    }


    bazarHeader.innerHTML = htmlHeader;
    bazarInformation.innerHTML = htmlInformation;
    bazarProducts.innerHTML = htmlProducts;
    

}
