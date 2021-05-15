import 'regenerator-runtime'; 
import '../styles/main.css';
import '../styles/responsive.css';
import dataJson from '../DATA.json';

// Menampilkan data dari JSON
console.log(dataJson);
let dataResto = dataJson['restaurants'];
let dataList = "";
dataResto.forEach(function(data) {
    dataList +=`
    <div class="card">
        <img class="card_item_img" src="${data.pictureId}" alt="" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="card_item_content">
            <p class="card_item_rating">
                Rating : 
                <a href="#" class="card_item_rating_value">${data.rating}</a>
            </p>
            <h1 class="card_item_title"><a href="#">${data.name}</a></h1>
            <div class="card_item_desc">${data.description}</div>
        </div>
    </div>
    `;
});
document.querySelector('#dataCard').innerHTML = dataList;

// Menu Mobile
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function (event) {
    drawer.classList.remove('open');
    event.stopPropagation();
});

main.addEventListener('click', function (event) {
    drawer.classList.remove('open');
    event.stopPropagation();
});