/**
 * App
 */

const app  = {
  dom: {
    root: root = document.getElementById( "root" )
  }
};

/**
 * Template Functions
 */

function loadHtmlContent( items ) {
  let content = "";

  items.forEach( ( item ) => {
    Object.keys( item ).forEach( ( key ) => {
      content += `<${ key }>${ item[ key ] }</${ key }>`;
    } );
  } );
  
  return content;
}

function showDescription( more, item ) {
  const description = item.querySelector( ".description" );

  if( description.classList.contains( "show" ) ) {
    description.classList.remove( "show" );
    more.innerText = "Mais informações";
  } else {
    description.classList.add( "show" );
    more.innerText = "Menos informações";
  }
}

/**
 * Load App
 */

function loadTemplate() {
  app.dom.root.innerHTML = `
    <div class="top-side">
      <header id="header"></header>
      <div id="infos" class="infos"></div>
    </div>
    <main id="main">
      <div class="container">
        <ul id="products" class="products"></ul>
      </div>
    </main>
  `;

  app.dom.header   = document.getElementById( "header" );
  app.dom.infos    = document.getElementById( "infos" );
  app.dom.main     = document.getElementById( "main" );
  app.dom.products = document.getElementById( "products" );

  app.dom.header.innerHTML = `
    <div class="container">
      <hgroup>
        <h1>${ app.config.title }</h1>
        <p>${ app.config.subTitle }</p>
      </hgroup>
    </div>
  `;

  app.dom.infos.innerHTML = `
    <div class="container">
      <div class="app-description">
        ${ loadHtmlContent( app.config.description ) }
      </div>
      <div class="contact">
        <h2>Contato</h2>
        <a target="_blank" href="mailto:${ app.config.email }"><i class="fa fa-envelope"></i></a>
        <a target="_blank" href="${ app.config.url }"><i class="fab fa-github"></i></a>
        <a target="_blank" href="tel:${ app.config.phone }"><i class="fa fa-phone"></i></a>
      </div>
    </div>
  `;
}

function loadProducts() {
  app.products.forEach( ( product, key ) => {
    const item = document.createElement( "li" );
    const more = document.createElement( "button" );

    item.className  = "product_item";
    item.className += product.active ? "" : " inactive";
    more.className  = "button more";
    more.innerText  = "Mais informações";

    item.innerHTML += `
      <img class="responsive" src="${ product.image }">
      <p class="product_item-title">${ product.name }</p>
      <p class="product_item-price">R$${ product.price }</p>
      <div class="description">
        ${ loadHtmlContent( product.description ) }
      </div>
      <button class="button more">Mais informações</button>
      <a href="mailto:${ app.config.email }" class="button buy">Comprar</a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=${ app.config.phone.replace( '+', '' ) }" class="button buy whatsapp"><i class="fab fa-whatsapp"></i>Comprar</a>
    `;

    item.querySelector( ".more" ).onclick = ( e ) => showDescription( e.srcElement, item );

    app.dom.products.appendChild( item );
  } );
}

function loadApp( data ) {
  if( data.configs && data.products ) {
    app.config   = data.configs;
    app.products = data.products;
    loadTemplate();
    loadProducts();
  } else {
    console.error( "Invalid data" );
  }
}

/**
 * App Boot
 */

function bootstrap() {
  fetch( "https://diogocezar.github.io/bazar/json/database.json" )
    .then( ( response ) => {
      if( response.ok ) {
        return response.json();
      }
    } )
    .then( ( json ) => {
      loadApp( json );
    } );
}

( () => {
  bootstrap();
} )();