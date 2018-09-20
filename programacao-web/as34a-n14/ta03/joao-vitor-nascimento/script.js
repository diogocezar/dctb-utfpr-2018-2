function func() {

}
fetch('https://diogocezar.github.io/bazar/json/database.json').then(function (response) {
    response.json().then(function (data) {
        const config = data.configs;
        var produtos = data.products;
        var text = "";
        text += "<div class = 'items-cabecalho'>" +
                "<h1>" + config.title + "</h1>" +
                "<h2>" + config.subTitle + "</h2>" +
                "<p>" + config.email +
                "<p>" + config.phone;
        for (var i in config.description) {
            var x = Object.keys(config.description[i]);
            if (JSON.stringify(x).substring(2, 4) === "h2") {
                text += "<" + JSON.stringify(x).substring(2, 4) + ">" + config.description[i].h2;
            } else {
                text += "<" + JSON.stringify(x).substring(2, 3) + ">" + config.description[i].p;
            }
        }
        document.getElementById("cabecalho").innerHTML = text;
        text = "";
        for (var prod in produtos) {

            text += "<div class = " + '"items';
            if (produtos[prod].active === false)
                text += ' inativo';
            text += '"><h1>"' + produtos[prod].name + "</h1>" +
                    "<img src=" + produtos[prod].image + "></img>";

            for (var desc in produtos[prod].description) {
                for (var i in produtos[prod].description[desc]) {
                    var x = Object.keys(produtos[prod].description[desc]);
                    if (JSON.stringify(x).substring(2, 4) === "h4") {
                        text += "<" + JSON.stringify(x).substring(2, 4) + ">" + produtos[prod].description[desc].h4;
                    } else {
                        text += "<" + JSON.stringify(x).substring(2, 3) + ">" + produtos[prod].description[desc].p;
                    }
                }
            }
            
            text += "<div class='preco-h1'>"+produtos[prod].price+",00"+"</div>";
            text += "<br><button><a href='mailto:"+config.email + "?Subject=" + config.subject+ produtos[prod].name + 
                    "&Body="+config.bodyMail+ produtos[prod].name + " por " + produtos[prod].price + "'>COMPRAR</a></button></div>";
        }
        document.getElementById("produtos").innerHTML = text;

    });
})
        .catch(function (err) {
            console.error('Failed retrieving information', err);
        });