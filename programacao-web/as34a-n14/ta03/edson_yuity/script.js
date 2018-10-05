var bazarHeader = document.getElementById("header"),
 bazarProducts = document.getElementById("products"),
ourRequest = new XMLHttpRequest;

function renderHTML(e) {
var header = "",
    products = "";
for (header += "<h1>" + e.configs.title + "</h1>", header += "<h2>" + e.configs.subTitle + "</h2>", header += "<a href=mailto:diogo@digocesar.com>", header += "<p>" + e.configs.email + "</p>", header += "</a>", header += "<a href=tel:+5543996299435>", header += "<p>" + e.configs.phone + "</p>", header += "</a>", header += "<div class=marg>", header += "<p>" + e.configs.description[0].p + "</p>", header += "<p>" + e.configs.description[1].p + "</p>", header += "<h2>" + e.configs.description[2].h2 + "</h2>", header += "<p>" + e.configs.description[3].p + "</p>", header += "</div>", i = 0; i < e.products.length; i++) {
    for (e.products[i].active ? products += "<div class='col-lg-3 item w1'>" : products += "<div class='col-lg-3 item w1 s1'>", products += "<h2>" + e.products[i].name + "</h2>", products += "<img src =" + e.products[i].image + ">", j = 0; j < e.products[i].description.length; j++) e.products[i].description[j].p ? products += "<p>" + e.products[i].description[j].p + "</p>" : products += "<h4>" + e.products[i].description[j].h4 + "</h4>";
    products += "<h2 class=price>R$: " + e.products[i].price + "</h2>", products += "<a href=mailto:diogo@digocesar.com>", products += "<button>Comprar", products += "</button>", products += "</a>", products += "</div>"
}
bazarHeader.innerHTML = header, bazarProducts.innerHTML = products
}
ourRequest.open("GET", "https://diogocezar.github.io/bazar/json/database.json"), ourRequest.onload = function() {
renderHTML(JSON.parse(ourRequest.responseText))
}, ourRequest.send();