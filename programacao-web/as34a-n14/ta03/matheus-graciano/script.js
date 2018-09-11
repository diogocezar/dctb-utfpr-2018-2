var bazarHeader = document.getElementById("header");
var bazarTeste = document.getElementById("teste");
var bazarProducts = document.getElementById("config");


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
    var htmlTeste = "";


    htmlHeader += "<h1>" +data.configs.title+ "</h1>";
    htmlHeader += "<h2>" +data.configs.subTitle+ "</h2>";
    htmlHeader += "<p>" +data.configs.email+ "</p>";
    htmlHeader += "<p>" +data.configs.phone+ "</p>";

    htmlHeader += "<p>" +data.configs.description[0].p+ "</p>";
    htmlHeader += "<p>" +data.configs.description[1].p+ "</p>"

    htmlHeader += "<h2>" +data.configs.description[2].h2+ "</h2>"
    htmlHeader += "<p>" +data.configs.description[3].p+ "</p>"

    htmlTeste += "<p>" +data.configs.description[0].p+ "</p>"

    for(i=0; i < data.products.length; i++){
        htmlProducts += "<h4>" +data.products[i].name+ "</h4>"
        htmlProducts += "<img src =" +data.products[i].image+ ">"
    }


    bazarHeader.innerHTML = htmlHeader;
    bazarProducts.innerHTML = htmlProducts;
    bazarTeste.innerHTML = htmlTeste;

}
