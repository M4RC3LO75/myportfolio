'use strict';

const images = [
    {'id': '1', 'url':'./images/bg-to-do-list-1.png', 'innerText': 'To Do List'},
    {'id':'2', 'url': './images/bg-login.png', 'innerText': 'Login Page'},
    {'id':'3', 'url': './images/bg-traffic-light.png', 'innerText': 'Traffic Light'},
]

const titles = [
    {'innerText': 'To Do List'},
    {'innerText': 'Login Page'},
    {'innerText': 'Traffic Light'},
]

const containerItems = document.querySelector('#container-items');
const containerTitles = document.querySelector('#title');
var index = 1;


const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item' id='${image.id}'><img src='${image.url}'></div>`});
    containerTitles.innerHTML = titles[index].innerText;
}

loadImages (images, containerItems, titles, containerTitles);

let imgItems = document.querySelectorAll('.img-item');

const previous = () => {
    const lastImgItem = imgItems[imgItems.length -1]; 
    containerItems.insertBefore(lastImgItem, imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');
    
    index = imgItems[1].id;
    containerTitles.innerHTML = titles[index-1].innerText;
}

const next = () => {
    containerItems.appendChild(imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');

    index = imgItems[1].id;
    containerTitles.innerHTML = titles[index-1].innerText;
}



document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#next').addEventListener('click', next);
