const url = 'https://diogocezar.github.io/bazar/json/database.json';

$(document).ready(() => {
    axios.get(url).then(response => {
        setHeader(response.data.configs);
        setProducts(response.data.products);
    });
});

function setHeader(data) {
    var html =
        `<h1>${data.title}</h1>
        <h2>${data.subTitle}</h2>
        <a href="mailto:${data.mail}">${data.email}</a>
        </br>
        <a href="tel:${data.phone}">${data.phone}</a>`;
    data.description.forEach(item => {
        var key = Object.keys(item)[0];
        html = html.concat(`<${key}>${item[key]}</${key}>`);
    });
    $("Header").html(html)
}

function setProducts(data) {
    data.forEach(product => {
        var html =
            `<div class="card ${product.active ? "" : "notActive"}">
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="foto de ${product.name}">
                <div class="description">`;
        product.description.forEach(item => {
            var key = Object.keys(item)[0];
            html = html.concat(`<${key}>${item[key]}</${key}>`);
        });
        html = html.concat(`
                </div>
                <br>
                <button ${product.active ? "" : "disabled='disabled'"}>Comprar</button>
            </div>`);
        $(".products").append(html);
        console.log(html);
    });
}