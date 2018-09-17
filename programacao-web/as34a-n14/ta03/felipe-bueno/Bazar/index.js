function loadJson() {
    var datafile = "https://diogocezar.github.io/bazar/json/database.json";
    var request = new XMLHttpRequest();
    try{
        request = new XMLHttpRequest(); //Para novos navegadores
    } catch(error){
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP"); //IE Browsers
        }  catch(error){
            try{
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(error) {
                alert("Algo deu errado!"); //Algo impossibilitou a conexão
                return false;
            }
        } 
    }

    request.onreadystatechange = function(){
        if(request.readyState == 4){
            var obj = JSON.parse(request.responseText);
        }

        cabecalho(obj);
        loadProducts(obj);
    }

    request.open("GET", datafile, true);
    request.send();
}

function cabecalho(obj){
    var desc1 = obj.configs.description[0].p;
    var desc2 = obj.configs.description[1].p;
    var desc3 = obj.configs.description[2].h2;
    var desc4 = obj.configs.description[3].p;
    var header = "<h1>" + obj.configs.title + "</h1>"  + "<h2>" + obj.configs.subTitle + "</h2>" +
    "<p><a>" + obj.configs.email + "</p></a>" + "<p><a>" + obj.configs.phone + "</p></a>" + "<p>" + desc1 + "</p>" +
    "<p>" + desc2 + "</p>" + "<h2>" + desc3 + "</h2>" + "<p>" + desc4 + "</p>";
    document.getElementById("header").innerHTML = header;
}

function loadProducts(obj){
    for (var index = 0; index < obj.products.length; index++) {
        if(!obj.products[index].active){
            var product = "<div class='" + "produto col-lg-5 col-xs-12 desativado'>" + "<h2>" + obj.products[index].name + "</h2>";
        }else{
            var product = "<div class='" + "produto col-lg-5 col-xs-12'>" + "<h2>" + obj.products[index].name + "</h2>";
        }
        product += "<a><img src='" + obj.products[index].image + "'/>";
        for (var j = 0; j < obj.products[index].description.length; j++){
            var desc = "";
            if(obj.products[index].description[j].p){
                desc += "<p>" + obj.products[index].description[j].p + "</p>";
            }
            if(obj.products[index].description[j].h4){
                desc += "<h4>" + obj.products[index].description[j].h4 + "</h4>";
            }
            product += desc; 
        }
        product += "<h2>" + "R$&nbsp" +  obj.products[index].price + "</h2>" + "<button class='" + "button'>" + "COMPRAR" + "</button>" + "</div>";
        document.getElementById("products").innerHTML += product;
    }
}