const url = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = selectElement('#container');
    container.appendChild(addElement('section', null, ['id', 'class'], ['announcement', 'my-infos container-fluid']));
    container.appendChild(addElement('section', null, ['id', 'class'], ['products', 'my-row container']));

    buildContainerAnnouncement(data.configs);
    buildContainerProducts(data);
  })
  .catch(err => {
    console.error('Failed retrieving information or something else', err);
});

function buildContainerAnnouncement(configs) {
    const announcement = selectElement('#announcement');
    announcement.appendChild(addElement('h1', configs.title));
    announcement.appendChild(addElement('h2', configs.subTitle));

    const email = addElement('p');
    email.appendChild(addElement('a', configs.email, 'href', `mailto:${configs.email}`));
    announcement.appendChild(email);

    const phone = addElement('p');
    phone.appendChild(addElement('a', configs.phone, 'href', `tel:+:${configs.phone}`));
    announcement.appendChild(phone);

    announcement.appendChild(addElement('br'));

    configs.description.forEach((obj) => {
        const key = Object.keys(obj)[0];
        const keyValue = obj[key];
        announcement.appendChild(addElement(key, keyValue));
    });
}

function buildContainerProducts(data) {
    const dataProducts = data.products;
    const dataConfigs = data.configs;
    const products = selectElement('#products');

    dataProducts.forEach((p) => {
        const product = addElement('div', null, 'class', p.active ? 'item well' : 'item well selled')
        products.appendChild(product);
        product.appendChild(addElement('h2', String(p.name).toLocaleUpperCase()));
        product.appendChild(addElement('img', null, ['class', 'src'], ['product-image', p.image]));
        
        const productDescription = addElement('div', null, 'class', 'description')
        product.appendChild(productDescription);
        p.description.forEach((obj) => {
            const key = Object.keys(obj)[0];
            const keyValue = obj[key];
            productDescription.appendChild(addElement(key, keyValue));
        });

        const productPrice = `R$ ${Number(p.price).toFixed(2).replace('.', ',')}`;
        product.appendChild(addElement('h2', productPrice, 'class', 'price'));
        
        const subject = `mailto:${dataConfigs.email}?subject=[QUERO COMPRAR] ${String(p.name).toLocaleUpperCase()}&body=Olá, estou interessado no produto ${String(p.name).toLocaleUpperCase()} por ${productPrice}`
        const buy = addElement('a', null, 'href', subject);
        product.appendChild(buy);
        buy.appendChild(addElement('button', 'COMPRAR'));
    });
}

function addElement(name, textContent, attribute, attributeName) { 
    const element = document.createElement(name); 
  
    if (textContent)
        element.appendChild(document.createTextNode(textContent));

    if (attribute && attributeName)
        if (typeof attribute === 'string' && typeof attributeName === 'string')
            element.setAttribute(attribute, attributeName);
        else if (typeof attribute === 'object' && typeof attributeName === 'object' && attribute.length > 0 && attributeName.length > 0)
            attribute.forEach((a, i) => element.setAttribute(a, attributeName[i]));

    return element;
}

function selectElement(identifier) {
    return document.querySelector(identifier); 
}