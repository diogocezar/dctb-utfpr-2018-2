$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function(result){
            var conf = result.configs;
            var prod = result.products;
            var h = document.getElementById('header');
            var text = '';

            //header
            text += '<h1>' + conf.title + '</h1>';
            text += '<h2>' + conf.subTitle + '</h2>';            
            text += '<p>'+ conf.description[0].p +'</p>';
            text += '<p>'+ conf.description[1].p +'</p>';
            text += '<h2>'+ conf.description[2].h2 +'</h2>';
            text += '<p>'+ conf.description[3].p +'</p>';
            text += '<a href="mailto:' + conf.email + '"><button>' + conf.email + '</button></a>' + '<br>';
            text += '</br>'
            text += '<a href="tel:' + conf.phone + '"><button>' + conf.phone + '</button></a>';
            

            h.innerHTML = text;

            //container
            var cont = document.getElementById('container');
            text = '';
            prod.forEach(element => {
                text += '<div class = "' + element.active +'">';
                text += '<h2>'+ element.name +'</h2>';
                text += '<img src = "'+ element.image +'" alt = "' + element.name +'">';
                element.description.forEach(numElemento => {
                    $.each(numElemento, function(key, value){
                        text += "<" + key +">"+ value +"</"+ key +">";
                    });
                });
                text += '<h2> R$ '+ element.price +',00</h2>';
                text += '<a href="mailto:'+ conf.email +'?subject=[QUERO COMPRAR] '+ element.name +'&amp;body=Olá, estou interessado no produto: '+ element.name +' por '+ element.price +'"><button>Comprar</button></a>';
                text += '</div>';
            });

            cont.innerHTML = text;
            
        }
    })
})
