$(document).ready(function(){
	var action = 'https://diogocezar.github.io/bazar/json/database.json';
	$.ajax({
		type: 'GET',
		url: action,
		data: [],
		success: function(data) {
			$('#title').append('<h1>'+data.configs.title+'</h1>');
			$('#subTitle').append('<h2>"'+data.configs.subTitle+'</h2>');
			$('#contact').append('<p>'+data.configs.email+'</p>');
			$('#contact').append('<p>'+data.configs.phone+'</p>');
			for(i = 0; i<data.configs.description.length; i++){
				if(i==2)
					$('#description').append('<h3>'+data.configs.description[i].h2+'</h3>');
				else
					$('#description').append('<p>'+data.configs.description[i].p+'</p>');
			}
			for(j = 0; j<data.products.length; j++){
				$('#prod'+[j]).append('<h3>'+data.products[j].name+'</h3>');
				$('#prod'+[j]).append('<img src="'+data.products[j].image+'"/>');
				for(k = 0; k<data.products[j].description.length;k++){
					if(data.products[j].description[k].h4)
						$('#prod'+[j]).append('<h4>'+data.products[j].description[k].h4+'</h4>');
					else
						$('#prod'+[j]).append('<p>'+data.products[j].description[k].p+'</p>');
				}
				$('#prod'+[j]).append('<p>R$ '+data.products[j].price+'</p>');				
			}
		},
	});
});