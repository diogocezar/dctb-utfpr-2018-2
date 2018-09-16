var bazarHeader = document.getElementById("header");
var bazarProducts = document.getElementById("item");


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


    htmlHeader += "<h1>" +data.configs.title+ "</h1>";
    htmlHeader += "<h2>" +data.configs.subTitle+ "</h2>";
    htmlHeader += "<a href=mailto:diogo@digocesar.com>"
    htmlHeader += "<p>" +data.configs.email+ "</p>";
    htmlHeader += "</a>"
    htmlHeader += "<a href=tel:+5543996299435>"
    htmlHeader += "<p>" +data.configs.phone+ "</p>";
    htmlHeader += "</a>"

    htmlHeader += "<div class=marg>"

    htmlHeader += "<p>" +data.configs.description[0].p+ "</p>"
    htmlHeader += "<p>" +data.configs.description[1].p+ "</p>"
    htmlHeader += "<h2>" +data.configs.description[2].h2+ "</h2>"
    htmlHeader += "<p>" +data.configs.description[3].p+ "</p>"

    htmlHeader += "</div>"


    for(i=0; i < data.products.length; i++){
        if(data.products[i].active){
            htmlProducts += "<div class='col-lg-4 item well'>"
        }
        else{
            htmlProducts += "<div class='col-lg-4 item well selled'>"
        }
        
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
        htmlProducts += "<h2 class=price>R$: " + data.products[i].price + "</h2>";
        htmlProducts += "<a href=mailto:diogo@digocesar.com>"
        htmlProducts += "<button>Comprar"
        htmlProducts += "</button>"
        htmlProducts += "</a>"
        htmlProducts += "</div>"
    }


    bazarHeader.innerHTML = htmlHeader;
    bazarProducts.innerHTML = htmlProducts;
    

}
