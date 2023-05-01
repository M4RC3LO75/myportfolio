'use strict';

const images = [
    {'id': '1', 'url':'./images/bg-to-do-list-1.png'},
    {'id':'2', 'url': './images/bg-login.png'},
    {'id':'3', 'url': './images/bg-traffic-light.png'},
]

const titles = [
    {'id': '1', 'innerText': 'To Do List'},
    {'id': '2', 'innerText': 'Login Page'},
    {'id': '3', 'innerText': 'Traffic Light'},
]

const containerItems = document.querySelector('#container-items');

const title = document.querySelector('#title');

const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item' id='${image.id}'><img src='${image.url}'></div>`});
}

const loadTitle = () => {
    
}

loadImages (images, containerItems, loadTitle);

let imgItems = document.querySelectorAll('.img-item');

const previous = () => {
    const lastImgItem = imgItems[imgItems.length -1]; 
    containerItems.insertBefore(lastImgItem, imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');
}

const next = () => {
    containerItems.appendChild(imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');
}



document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#next').addEventListener('click', next);
