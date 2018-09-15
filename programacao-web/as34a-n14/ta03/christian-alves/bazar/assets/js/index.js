function setMain(data){
    const content = `<h1>${data.title}</h1>
        <h2>${data.subTitle}</h2>
        <p id="mail">${data.email}</p>
        <p>${data.phone}</p>
        <p>${data.description[0].p}</p>
        <p>${data.description[1].p}</p>
        <h2>${data.description[2].h2}</h2>
        <p>${data.description[3].p}</p>`
    document.querySelector('#main-container').innerHTML = content;
}

function setProduct(product) {
    let str = ''
    product.forEach(element => {
        str += `<div class="container col-lg-4 col-md-4 col-sm-6 col-xs-12>"`
        str += `<h4>${element.name}</h4>
            <figure><img src="${element.image}"/></figure>
            <div>`
        element.description.forEach(desc => {
            if (desc.p) str += `<p>${desc.p}</p>`
            else str += `<h4>${desc.h4}</h4>`
        })
        str += `</div></div>`
    });
    document.querySelector('#product-container').innerHTML = str
}


const URL = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(URL, {
    method: 'get'
}).then(function(result){
    result.json().then(function(data) {
        setMain(data.configs)
        setProduct(data.products)
    });
}).catch(function(err){
    console.error('Falha ao obter banco de dados.', err);
});