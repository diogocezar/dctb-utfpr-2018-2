var data;
var head = document.head;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    data = xhttp.response;
    data = JSON.parse(data)
    let content = '';
    data.products.forEach(e => {
      let desc = '';
      e.description.forEach(d =>{
        keys = Object.keys(d);
        values = Object.values(d)
        desc+=`<`+keys[0]+`>`+values[0]+`</`+keys[0]+`>`
      })
            content+=`<div class="prod `+e.active+`">
                          <h3>`+ e.name.toUpperCase() + `</h3>
                          <img src="`+ e.image + `"/>
                          `+ desc +`
                          <h1>`+'R$'+ e.price+',00' +`<h1>
                          <a href="mailto:`+data.configs.email+`?subject=`+data.configs.subject+`&body=`+data.configs.bodyMail+e.name+`"><button>COMPRAR</button></a>
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
                      head.innerHTML+=`"  <link rel="stylesheet" type="text/css" href="style.css">`
                      
    }
};
xhttp.open("GET", "https://diogocezar.github.io/bazar/json/database.json", true);
xhttp.send();
