'use strict';

const btnSorts = document.querySelectorAll('.sort');

function sortProducts(btn, type) {
    const productLists = document.querySelector('.products_list'),
        products = document.querySelectorAll('.products'),
        sortTypeName = btn.getAttribute(`data-${type}`);

    products.forEach((product) => {
        const productType = product.querySelector('img').getAttribute(`data-${type}`);

        if(productType === sortTypeName) {
            productLists.appendChild(product);
            product.classList.remove('off');
        } else {
            product.classList.add('off');
        }
    });
}

function clickButton(ele) {
    ele.addEventListener('click', () => {
        const btnClass = ele.getAttribute('class');
        const btnClassName = btnClass.split(' ');

        if(btnClassName.includes('shape')) {
            sortProducts(ele, 'shape');
        } else {
            sortProducts(ele, 'color');
        }
    });
}

function init(){
    btnSorts.forEach((sort) => clickButton(sort));
};

init();