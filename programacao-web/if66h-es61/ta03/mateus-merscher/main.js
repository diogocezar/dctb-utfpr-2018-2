var data;
var head = document.head;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    data = xhttp.response;
    data = JSON.parse(data)
    let content = '';
    let desc = '';
    data.products.forEach(e => {
      e.description.forEach(d =>{
        keys = Object.keys(d);
        values = Object.values(d)
        desc+=`<`+keys[0]+`>`+values[0]+`</`+keys[0]+`>`
      })
            content+=`<div class="prod">
                          <h3>`+ e.name + `</h3>
                          <img src="`+ e.image + `"/>
                          `+ desc +`
                          <h1>`+'R$'+ e.price+',00' +`<h1>
                          <button onClick="comprar()">COMPRAR</button>
                          </div>`
  }); 
    head.innerHTML = '<title>' + data.configs.title + '</title>'
    head = document.getElementById('aqui');
    head.innerHTML = `<div class="cabecalho">
                      <h1>`+ data.configs.title.toUpperCase() + `</h1>
                      <h2>`+ data.configs.subTitle + `</h2>
                      <a>`+ data.configs.email + `</a>
                      <a>`+ data.configs.phone + `</a>
                      <p>`+ data.configs.description[0].p + `</p>
                      <p>`+ data.configs.description[1].p + `</p>
                      <h2>`+ data.configs.description[2].h2 + `</h2>
                      <p>`+ data.configs.description[3].p + `</p>
                      </div>
                      <div class="content">`+content+`
                      </div>`;
    }
};
xhttp.open("GET", "https://diogocezar.github.io/bazar/json/database.json", true);
xhttp.send();
var css;
var cssRecover = new XMLHttpRequest();
cssRecover.onreadystatechange = () => {
  if (cssRecover.readyState == 4 && cssRecover.status == 200) {
     css = cssRecover.response;
     head.innerHTML += "<style>"+css+"</style>";
    console.log(css)
    }
};
cssRecover.open("GET", "style.css",true);
cssRecover.send();
function comprar(){
  console.log('fechou')
}
