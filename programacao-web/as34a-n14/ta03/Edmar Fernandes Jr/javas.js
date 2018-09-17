var lojaIntro = document.getElementById("intro");
var lojaProd = document.getElementById("prod");

var request = new XMLHttpRequest();
request.open('GET', 'https://diogocezar.github.io/bazar/json/database.json');
request.onload = function()
{
    var info = JSON.parse(request.responseText);
    load(info);
};
request.send();

function load(data)
{
		var StringIntro = "";
		var StringProd = "";
		
		StringIntro += "<h1>" + data.configs.title + "</h1>";
		StringIntro += "<h2>" + data.configs.subtitle + "</h1>";
		StringIntro += "<p>" + data.configs.email + "</p>";
		StringIntro += "<p>" + data.configs.phone + "</p>";
		StringIntro += "<p>" + data.configs.description[0].p + "</p>";
		StringIntro += "<p>" + data.configs.description[1].p + "</p>";
		
		
		for(c = 0; c < data.products.length; c++)
		{
			
			StringProd += "<h2>" + data.products[1].name + "</h2>";
			StringProd += "<img src =" + data.products[c].image + ">";
			for(i = 0; i < data.products[c].description.length; i++)
			{
				if(data.products[c].description[i].p)
				{
					StringProd += "<p>" + data.products[c].description[i].p + "</p>";
				}
				else
				{
					StringProd += "<h4>" + data.products[c].description[i].h4 + "</h4>";
				}
			}
			StringProd += "<h2>Preço: R$" + data.products[c].price + "</h2>";
			
		}

    lojaIntro.innerHTML = StringIntro;
    lojaProd.innerHTML = StringProd;
}
}