'use strict';

const images = [
    {'id': '1', 'url':'./images/bg-to-do-list-1.png', 'innerText': 'To Do List'},
    {'id':'2', 'url': './images/bg-login.png', 'innerText': 'Login Page'},
    {'id':'3', 'url': './images/bg-traffic-light.png', 'innerText': 'Traffic Light'},
]

const titles = [
    {'id': '1', 'innerText': 'To Do List'},
    {'id': '2', 'innerText': 'Login Page'},
    {'id': '3', 'innerText': 'Traffic Light'},
]

const containerItems = document.querySelector('#container-items');

const containerTitles = document.querySelector('#title');

const loadImages = (images, container, titles, textcontainer) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item' id='${image.id}'><img src='${image.url}'></div>`});
    titles.forEach (title => {textcontainer.innerHTML += `<h1 class='text-item' id='${title.id}'>${title.innerText}</h1>`});
}

loadImages (images, containerItems, titles, containerTitles);

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
