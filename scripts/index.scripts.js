

function categoryMenu(productsList) {

    let productsHTML = '';
    productsList.category.forEach(element => {
        productsHTML +=
            `  <li><a target="store" class="dropdown-item" onclick="categoryRef(${element.id})" href="#">${element.name}</a></li>   
        `

    });

    document.getElementById('dropdown-menu').innerHTML = productsHTML;

}

function categoryRef(id) {
    var iframeProduct = document.getElementById("iframeProduct");
    iframeProduct.style.display = "none";

    var iframeProduct2 = document.getElementById("iframeProduct2");
    var iframeCategory = document.getElementById("iframeCategory");
    var iframeSearch = document.getElementById("iframeSearch");

    if (iframeCategory.style.display === "none") {

        iframeCategory.style.display = "block";
        iframeProduct2.style.display = "none";
        iframeSearch.style.display = "none";


        const iframe = document.getElementById('iframeC');
        iframe.src = `/categorias?id=${id}`;

    }
    if (iframeCategory.style.display === "block") {

        const iframe = document.getElementById('iframeC');
        iframe.src = `/categorias?id=${id}`;

    } else {
        iframeCategory.style.display = "none";
    }

}

window.onload = async () => {
    const response = await fetch(`https://api-bsale-test-ignacio.herokuapp.com/categoria`);
    const productsList = await response.json();

    categoryMenu(productsList);
}

//------ mostrar y esconder el iframe--------

function ShowHideProduct() {
    var iframeProduct = document.getElementById("iframeProduct");
    var iframeProduct2 = document.getElementById("iframeProduct2");
    var iframeCategory = document.getElementById("iframeCategory");
    var iframeSearch = document.getElementById("iframeSearch");

    if (iframeProduct2.style.display === "none") {
        iframeProduct2.style.display = "block";
        iframeCategory.style.display = "none";
        iframeProduct.style.display = "none";
        iframeSearch.style.display = "none";

        const iframe = document.getElementById('iframeP2');
        iframe.src = `/productos`;
    }
}

// ------------- enviar datos de la busqueda --------------

function search() {
    const formElement = document.getElementById("searchProduct");

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        let value = document.getElementById("searchInput").value;

        var iframeProduct = document.getElementById("iframeProduct");
        iframeProduct.style.display = "none";

        var iframeProduct2 = document.getElementById("iframeProduct2");
        var iframeCategory = document.getElementById("iframeCategory");

        if (iframeSearch.style.display === "none") {
            iframeSearch.style.display = "block";
            iframeProduct2.style.display = "none";
            iframeCategory.style.display = "none";

            const iframe = document.getElementById('iframeS');
            iframe.src = `/buscar?value=${value}`;
        }
        if (iframeSearch.style.display === "block") {
            const iframe = document.getElementById('iframeS');
            iframe.src = `/buscar?value=${value}`;

        }

    });

}
