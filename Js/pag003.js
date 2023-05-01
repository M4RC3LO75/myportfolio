'use strict';

const images = [
    {'id': '1', 'url':'./images/bg-to-do-list-1.png'},
    {'id':'2', 'url': './images/bg-login.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item'><img src='${image.url}'></div>`});
}

loadImages (images, containerItems);