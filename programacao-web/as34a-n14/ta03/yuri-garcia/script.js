var bazarContainerInfo = document.getElementById("info");
var bazarContainerProdutos = document.getElementById("prod");

var request = new XMLHttpRequest();
request.open('GET', 'https://diogocezar.github.io/bazar/json/database.json');
request.onload = function()

{
    var ourData = JSON.parse(request.responseText);
    renderHTML(ourData);
};
request.send();

function renderHTML(data)
{
    var stringInfo = "";
    var stringProd = "";
    
    stringInfo += "<h1>" + data.configs.title + "</h1>";
    stringInfo += "<h2>" + data.configs.subTitle + "</h2>";
    stringInfo += "<p>" + data.configs.email + "</p>";
    stringInfo += "<p>" + data.configs.phone + "</p>";
   
    stringInfo += "<p>" + data.configs.description[0].p + "</p>";
    stringInfo += "<p>" + data.configs.description[1].p + "</p>";
    
    for(i = 0; i < data.products.length; i++)
    {
        stringProd += "<h4>" + data.products[i].name + "</h4>";
        stringProd += "<img src =" + data.products[i].image + ">";
        for(j = 0; j < data.products[i].description.length; j++)
        {
            if(data.products[i].description[j].p)
            {
                stringProd += "<p>" + data.products[i].description[j].p + "</p>";
            }
            
            else
            {
                stringProd += "<h4>" + data.products[i].description[j].h4 + "</h4>";
            }
        }
        stringProd += "<h4>Preço: R$" + data.products[i].price + "</h4>";
    }
    
    bazarContainerInfo.innerHTML = stringInfo;
    bazarContainerProdutos.innerHTML = stringProd;
}