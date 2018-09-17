$(document).ready(function(){
	$.getJSON("https://diogocezar.github.io/bazar/json/database.json", function(data){
		var info= '';
		var produto= '';

		console.log(data.configs);
		console.log(data.products);

		info+= '<h1>'+ data.configs.title+ '</h1>';
		info+= '<h2>'+ data.configs.subTitle+ '</h2>';
		info+= '<p>'+ data.configs.email+ '</p>';
		info+= '<p>'+ data.configs.phone+ '</p>';

		for(d= 0; d < data.configs.description.length; d++){
			if (d == 2) {
				info += '<h2>'+ data.configs.description[d].h2+ '</h2>';
			}
			info += '<p>'+ data.configs.description[d].p+ '</p>';
		}

		for(i = 0; i<data.products.length ;i++){
			if(data.products[i].active){
	            produto += "<div class='produt imagem'>"
	        }

			produto+= '<h2>Produto : '+ data.products[i].name+ '</h2>';
			produto+= '<img class = "foto" src = "'+data.products[i].image +'" '+'<br>';

				for(j = 0; j < data.products[i].description.length; j++){
					if (data.products[i].description[j].h4)
						produto += '<h4>'+ data.products[i].description[j].h4 +'</h4>';
					else if (data.products[i].description[j].p)
						produto += data.products[i].description[j].p +'<br>';
				}
			produto+= '<h2>R$: ' +data.products[i].price +',00 </h2>';
			produto += "</div>"
		}
			

		$('#padrao').html(info);
		$('#produto').html(produto);
	}
	)
}
)