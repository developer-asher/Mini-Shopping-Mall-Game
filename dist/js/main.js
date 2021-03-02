'use strict';

function sortShape() {
    const productLists = document.querySelector('.products_list'),
        products = document.querySelectorAll('.products'),
        sortTypeName = this.getAttribute('data-shape');

    products.forEach((product) => {
        const productType = product.querySelector('img').getAttribute('data-shape');

        if(productType === sortTypeName) {
            productLists.appendChild(product);
            product.classList.remove('off');
        } else {
            product.classList.add('off');
        }
    });
}

function sortColor() {
    const productLists = document.querySelector('.products_list'),
        products = document.querySelectorAll('.products'),
        sortTypeName = this.getAttribute('data-color');

    products.forEach((product) => {
        const productType = product.querySelector('img').getAttribute('data-color');

        if(productType === sortTypeName) {
            productLists.appendChild(product);
            product.classList.remove('off');
        } else {
            product.classList.add('off');
        }
    });
}

function clickSortButton(sortType, cate) {
    const btnSort = document.querySelector(`${sortType}`);
    
    if(cate === 'shape') {
        btnSort.addEventListener('click', sortShape);
    } else if(cate === 'color'){
        btnSort.addEventListener('click', sortColor);
    }
    
}

function init(){
    clickSortButton('.sort_shirt', 'shape');
    clickSortButton('.sort_pants', 'shape');
    clickSortButton('.sort_skirt', 'shape');
    clickSortButton('.sort_blue', 'color');
    clickSortButton('.sort_yellow', 'color');
    clickSortButton('.sort_pink', 'color');
};

init();