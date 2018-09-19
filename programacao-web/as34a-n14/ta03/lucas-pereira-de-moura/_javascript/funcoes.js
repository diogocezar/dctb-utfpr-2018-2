var cabecalho = document.getElementById("topo");
var itens = document.getElementById("produtos");


var arquivoJson = new XMLHttpRequest();
arquivoJson.open('GET', 'https://diogocezar.github.io/bazar/json/database.json');
arquivoJson.onload = function(){
    var conteudo = JSON.parse(arquivoJson.responseText);
    mostraNohtml(conteudo);
};
arquivoJson.send();

function mostraNohtml(arquivo){
    var cabecalho = "";
    var itens = "";


    /*Cabeçalho*/ 
    cabecalho += "<h1>" + arquivo.configs.title + "</h1>";
    cabecalho += "<h2>" + arquivo.configs.subTitle + "<h2>";
    cabecalho += "<p>" + arquivo.configs.email + "<br>" + arquivo.configs.phone + "</p>";
    
    for( i = 0; i < arquivo.configs.description.length; i++){
        if(arquivo.configs.description[i].p){
            cabecalho += "<p>" + arquivo.configs.description[i].p + "</p>";
        }else{
            cabecalho += "<h2>" + arquivo.configs.description[i].h2 + "</h2>";
        }    
    }
    /*fim Cabeçalho*/

    /*Produtos*/
    for(i = 0; i < arquivo.products.length; i++){

        
        itens += "<h3>" + arquivo.products[i].name + "</h3>" + "<img src=" + arquivo.products[i].image + ">";
        for(j = 0; j < arquivo.products[i].description.length; j++){
            if(arquivo.products[i].description[j].p){
                itens += "<p>" + arquivo.products[i].description[j].p + "</p>";
            }else{
                itens += "<h4>" + arquivo.products[i].description[j].h4 + "</h4>";
            }
        }
        itens += "<h3 id='preco'>R$ " + arquivo.products[i].price + "</h3>"; 
        
    }
    /*fim Produtos*/
    


    topo.innerHTML = cabecalho;
    produtos.innerHTML = itens;
}