

function displayProducts(productsList) {
    let productsHTML = '';

    if (productsList.results.length === 0) {
        productsHTML = 'el producto no se encuentra';
    }

    productsList.results.forEach(element => {
        let discount = element.discount;
        let priceDiscount = Math.trunc(((100 - discount) / 100) * element.price);

        if (discount > 0) {
            productsHTML +=
                `<div class="product-container">
                <h3>${element.name}</h3>
                <img src="${element.url_image}" />
                <h4 style="color: red;">antes: $${element.price}</h4>
                <h2>ahora: $${priceDiscount}</h2>
                <button class="btn btn-outline-success button-add" onclick="add('${element.id}', ${element.price})">Agregar</button>
            </div>`
        } else {
            productsHTML +=
                `<div class="product-container">
            <h3>${element.name}</h3>
            <img src="${element.url_image}" />
            <h2>ahora: $${priceDiscount}</h2>
            <button class="btn btn-outline-success button-add" onclick="add('${element.id}', ${element.price})">Agregar</button>
        </div>`
        }
    });

    document.getElementById('page-content').innerHTML = productsHTML;

}

window.onload = async () => {
    const params = new URL(location.href).searchParams;

    const value = params.get('value');

    const response = await fetch(`https://api-bsale-test-ignacio.herokuapp.com/buscar/productos/${value}`);
    const productsList = await response.json();
    displayProducts(productsList);
}


//---------------loader--------------------------

window.addEventListener("load", function () {
    this.setTimeout(function () {
        document.getElementById("loader");
    }, 3000)
})