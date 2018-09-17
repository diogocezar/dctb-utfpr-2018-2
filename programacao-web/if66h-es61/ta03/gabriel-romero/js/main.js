$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function(result){
            var conf = result.configs;

            var titulo = document.getElementById('titulo');
            titulo.innerText = conf.title;

            var sub = document.getElementById('subTitulo');
            sub.innerText = conf.subTitle;

            var des1 = document.getElementById('des1');
            des1.innerText = conf.description[0].p;

            var des2 = document.getElementById('des2');
            des2.innerText = conf.description[1].p;

            var des3 = document.getElementById('des3');
            des3.innerText = conf.description[2].h2;

            var des4 = document.getElementById('des4');
            des4.innerText = conf.description[3].p;

            var email = document.getElementById('email');
            email.innerText = conf.email;

            var tel = document.getElementById('tel');
            tel.innerText = conf.phone;
            
            // config
            var itens = result.products;
            var conteudo = document.getElementById('conteudo');
            var texto = '';
            itens.forEach(iten => {
                var d = document.createElement("div");

                texto += "<h1 class='tituloItem'>"+iten.name+"</h1>";
                texto += "<img src="+iten.image+" />";

                iten.description.forEach(dElemento => {
                    $.each(dElemento, function(key, value){
                        texto += "<" + key +">"+ value +"</"+ key +">";
                    });
                });
                texto += "<p class='money'>R$"+iten.price+"</p>";
                console.log(iten.active)
                if(iten.active == true){
                    d.className = "itensConteudo";
                    texto += "<button class='btn-comprar'>COMPRAR</button>";
                }
                else{
                    d.className = "itensConteudo vendido";
                    texto += "<p class='vendidoEscrita'>VENDIDO</p>";
                }

                d.innerHTML = texto;
                texto = '';
                conteudo.appendChild(d);
            });
        },
    });
});