const URL_TO_FETCH = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(URL_TO_FETCH)
    .then(response => { return response.json()})
    .then(data => {
        console.log(data);
        var configs = document.getElementById("configs");
        var products = document.getElementById("products");
        configs.innerHTML = fillConfigs(data.configs);
        data.products.forEach(function(element) {
            products.innerHTML += fillProducts(element);
        }) 
    })
    .catch(err => {
        console.log(err);
    })

const fillConfigs = function(cfg) {
    var title = `<h1>${cfg.title}</h1>`;
    var subTitle = `<h2>${cfg.subTitle}</h2>`;
    var email = `<p><a href="mailto:${cfg.email}">${cfg.email}</a></p>`;
    var number = `<p><a href="tell:${cfg.phone}">${cfg.phone}</a></p>`;
    var desc = fillDesc(cfg.description);
    let html = `${title} ${subTitle} ${email} ${number} ${desc}`;
    return html;
}

const fillProducts = function (prod) {
    var active = prod.active;
    var name = `<h2>${prod.name}</h2>`;

    var image = `<img src="${clearUrl(prod.image)}"/>`;
    var desc = fillDescription(prod.description);
    var price = `<h2 class="price">R$ ${prod.price},00</h2>`;
    var buy = `<button>Comprar</button>`;
    if(active) {
        let html = `<div class="item well">${name} ${image} ${desc} ${price} ${buy}`;
        return html;
    }else{
        let html = `<div class="item well selled">${name} ${image} ${desc} ${price}`;
        return html;
    }
}

const fillDescription = function(desc) {
    let html = ' ';
    desc.forEach(element => {
        let verificar = check(JSON.stringify(element));

        if (verificar == "h4") {
            html += `<h4>${element.h4}</h4>`;
        } else {
            html += `<p>${element.p}</p>`;
        }
    });
    return `<div class="description">${html}</div>`;
}

const fillDesc = function(desc) {
    let html = ' ';

    desc.forEach(element => {
        let verificar = check(JSON.stringify(element));

        if(verificar == "h2") {
            html += `<h2>${element.h2}</h2>`;
        }else{
            html += `<p>${element.p}</p>`;
        }
    });
    return `<div class="description">${html}</div>`;
}

const check = function(element) {
    var cut = element.substring(2,4);
    return cut;
}

const clearUrl = function(url) {
    var r = url.replace(" ", "/");
    return r;
}