'use strict';

function loadItems() {
  return fetch('dist/data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item" data-key="${item.type}" data-color="${item.color}">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset,
    key = dataset.key,
    value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  updateItems(value);

  // 방법 2 - 단점:
  // const filtered = items.filter((item) => item[key] === value);
  // displayItems(filtered);
}

function updateItems(value) {
  const li = document.querySelectorAll('.item');
  li.forEach((ele) => {
    if (ele.dataset.key !== value && ele.dataset.color !== value) {
      ele.classList.add('invisible');
    } else {
      ele.classList.remove('invisible');
    }
  });
}

function setEventListener(items) {
  const logo = document.querySelector('.logo'),
    buttons = document.querySelector('.buttons');

  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log());
