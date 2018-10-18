$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function(result){
            var conf = result.configs;
            var prod = result.products;

            var cabeçalho;
            cabeçalho = '<h1>' + conf.title + '</h1>';
            cabeçalho += '<h2>' + conf.subTitle + '</h2>';
            cabeçalho += '<a href="mailto:' + conf.email + '">' + conf.email + '</a>' + '</br>';
            cabeçalho += '<a href="tel:' + conf.phone + '">' + conf.phone + '</a>';
            cabeçalho += '<h3>'+ conf.description[0].p +'</h3>';
            cabeçalho += '<h3>'+ conf.description[1].p +'</h3>';
            cabeçalho += '<h3>'+ conf.description[2].h2 +'</h3>';
            cabeçalho += '<h3>'+ conf.description[3].p +'</h3>';

            document.getElementById('header').innerHTML = cabeçalho;

            conteudo = '';
            prod.forEach(element => {
                conteudo += '<div class = "' + element.active +'">';
                conteudo += '<h2>'+ element.name +'</h2>';
                conteudo += '<img src = "'+ element.image +'" alt = "' + element.name +'">';
                element.description.forEach(numElemento => {
                    $.each(numElemento, function(key, value){
                        conteudo += "<" + key +">"+ value +"</"+ key +">";
                    });
                });
                conteudo += '<h2> R$ '+ element.price +',00</h2>';
                conteudo += '<a href="mailto:'+ conf.email +'?subject=Compra '+ element.name +'&amp;Gostaria do: '+ element.name +' por '+ element.price +'"><button>Comprar</button></a>';
                conteudo += '</div>';
            });
            document.getElementById('container').innerHTML = conteudo;
            
        }
    })
})