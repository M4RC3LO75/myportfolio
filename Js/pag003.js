'use strict';

const images = [
    {'id': '1', 'url':'./images/bg-to-do-list-1.png'},
    {'id':'2', 'url': './images/bg-login.png'},
    {'id':'3', 'url': './images/bg-traffic-light.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item'><img src='${image.url}'></div>`});
}

loadImages (images, containerItems);

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
