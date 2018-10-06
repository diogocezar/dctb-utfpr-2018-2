/*import title from './title.js'*/

const URL_TO_FETCH = 'https://diogocezar.github.io/bazar/json/database.json'

fetch(URL_TO_FETCH, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
}).then(response => response.json())
    .then(result => {
        document.querySelector('[data-js="title"]').insertAdjacentHTML('afterbegin', title(result))
        document.querySelector('[data-js="description"]').insertAdjacentHTML('afterbegin', titleDescription(result))
        document.querySelector('[data-js="products"]').insertAdjacentHTML('afterbegin', product(result.products))
    })
    .catch(err => {
        console.error('Failed retrieving information', err);
    });

const title = data => `<h1 class="title">${data.configs.title}</h1>
                       <h4>${data.configs.subTitle}</h4>
                       <p>${data.configs.email}</p>
                       <p>${data.configs.phone}</p>`

const titleDescription = data => `${description(data.configs.description)}`

const description = data => {
    desc = ''
    data.forEach(element => {
        tag = Object.keys(element)[0]
        desc += `<${tag}>${element[tag]}</${tag}>\n`
    })
    return desc;
}

const product = data => {
    pro = ''
    data.forEach(element => {
        pro += `<div ${element.active ? `` : `class="selled"`} >
        <div class="card card-product card-plain no-shadow" data-colored-shadow="false">
            <div class="card-content">
                <a href="#">
                <h4 class="card-title">${element.name}</h4>
                </a>
            </div>
            <div class="card-image">
                <a href="#">
                    <img class="img-fluid" src="${element.image}" alt="..." />
                </a>
            </div>
            <div class="card-content">
                <div class="description">
                    ${description(element.description)}
                </div>
                <div class="footer">
                    <div class="price-container">
                        <h2 class="price">${element.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>

                    </div>
                    <button class="btn btn-rose btn-simple btn-fab btn-round pull-right" rel="tooltip"
                        data-placement="left">
                        <i class="material-icons">favorite</i>
                    </button>
                    </div>
                </div>
            </div>
        </div>\n`
    })
    return pro
}