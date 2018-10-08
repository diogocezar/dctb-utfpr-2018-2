var products = document.getElementById("content");
var descrição = "esse produto é foda";
const list = [
    {
        "name": "Toca Fitas",
        "img": "imgs/tocaFitas",
        "descript": "Toca fitas em bom estado, toca as fitas muito bem.",
        "price": "R$ 20,00"
    },
    {
        "name": "Boné de Posto",
        "img": "imgs/bone.jpg",
        "descript": "Boné novo, na moda entre senhores de idade!",
        "price": "R$ 5,00"

    },
    {
        "name": "Frigideira",
        "img": "imgs/frigideira.jpg",
        "descript": "Frita!",
        "price": "R$ 30,00"
    },
    {
        "name": "Copo Americano",
        "img": "imgs/copo.jpg",
        "descript": "Pra ser um alcoolátra raiz!!!",
        "price": "R$ 2,00"
    },
    {
        "name": "Lactovacilos",
        "img": "imgs/lactovacilos.jpg",
        "descript": "Leite também da bola fora.",
        "price": "R$ 1,20"
    },
    {
        "name": "Pandeiro",
        "img": "imgs/pandeiro.jpg",
        "descript": "Perfeito para tocar aquele samba no churras.",
        "price": "R$ 15,00"
    },
    {
        "name": "Uniforme Seleçao",
        "img": "imgs/camisa.jpg",
        "descript": "Da pra usar na copa, e depois da copa? Em protestos.",
        "price": "R$ 100,00"
    },
    {
        "name": "Maço de Derby",
        "img": "imgs/derby.jpg",
        "descript": "Direto do Paraguai para voce, apenas 1,99!!",
        "price": "R$ 1,99"
    },
    {
        "name": "Bandana Naruto",
        "img": "imgs/naruto.jpg",
        "descript": "Esse é meu jeito ninja, Dattebayo.",
        "price": "R$ 25,00"
    },
    {
        "name": "Site",
        "img": "imgs/site.png",
        "descript": "Faço um site baratin, melhor que o sobrinho da vizinha.",
        "price": "R$ 50,00"
    },
    {
        "name": "Vuvuzela",
        "img": "imgs/vuvuzela.jpg",
        "descript": "Porque o 'fuuuuuuuuon, fon, fon' nunca sai de moda.",
        "price": "R$ 10,00"
    },
    {
        "name": "Corsa",
        "img": "imgs/corsa.jpg",
        "descript": "Corsa em bom estado, já foi capotado mas nem da pra ver.",
        "price": "R$ 50.000,00"
    }

]

function load() {
    console.log(products)
    list.forEach((e) => {
        products.innerHTML +=
            `
    <div class="card border-dark col-sm-12 col-lg-3">
    <img class="card-img-top " src="`+ e.img + `"/>
    
        <div class="card-body text-dark">
        <h2 class="card-title">`+ e.name + `</h2>
            <p class="card-text">`+ e.descript + `</p>
            <a href="#" class="btn btn-primary">`+e.price+`</a>
        </div>
    </div>
    `
    })
}