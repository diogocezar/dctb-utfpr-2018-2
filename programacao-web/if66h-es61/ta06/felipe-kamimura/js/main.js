$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: './pkm.json',
        dataType: 'json',
        success: function(result){
            var conf = result.configs;
            var itens = result.pkms;
        
            var title = document.getElementById('title');
            title.innerText = conf.title;

            var subtitle = document.getElementById('subtitle');
            subtitle.innerText = conf.subtitle;

            var text = '';
           itens.forEach(function(element){
                text += '<div class="' + element.div + '">';
                text += '<img src="' + element.img + '"/>';
                text += '<h4>' + element.num + '</h4>';
                text += '<h3>' + element.name + '</h3>';
                text += '</div>';
            });

            var pkms = document.getElementById('pkms');
            pkms.innerHTML = text;


        }
    })

})