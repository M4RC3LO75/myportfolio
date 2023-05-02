'use strict';

const images = [
    {'id': '0', 'url':'./images/bg-to-do-list-1.png', 'innerText': 'To Do List'},
    {'id':'1', 'url': './images/bg-login.png', 'innerText': 'Login Page'},
    {'id':'2', 'url': './images/bg-traffic-light.png', 'innerText': 'Traffic Light'},
]

const titles = [
    {'id': '0', 'innerText': 'Lista de Tarefas'},
    {'id': '1', 'innerText': 'Página de Login'},
    {'id': '2', 'innerText': 'Semáforo'},
]

const descriptions = [
    {'id': '0', 'innerText': 'Uma página de lista de tarefas criada com o uso de JavaScript.'},
    {'id': '1', 'innerText': 'Página de login usando Mobile First e Media Queries.'},
    {'id': '2', 'innerText': 'Usando a liguagem JavaScript, pode-se clicar nos botões para acender a cor desejada, ou acionar a troca de cores automaticamente.'},
 ]

 const projectpages = [
    {'id': '0', 'url': 'https://m4rc3lo75.github.io/personal-projects/to-do-list/index.html'},
    {'id': '1', 'url': 'https://m4rc3lo75.github.io/personal-projects/projeto-login/index.html'},
    {'id': '2', 'url': 'https://m4rc3lo75.github.io/personal-projects/semaphore/index.html'},
 ]

 const gitpages = [
    {'id': '0', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/to-do-list'},
    {'id': '0', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/projeto-login'},
    {'id': '0', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/semaphore'},
 ]

const containerItems = document.querySelector('#container-items');
const containerTitles = document.querySelector('#title');
const containerDescription = document.querySelector('#description');
var index = 1;


const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item' id='${image.id}'><img src='${image.url}'></div>`});
    containerTitles.innerHTML = titles[index].innerText;
    containerDescription.innerHTML = descriptions[index].innerText;
}

loadImages (images, containerItems, titles, containerTitles);

let imgItems = document.querySelectorAll('.img-item');

const previous = () => {
    const lastImgItem = imgItems[imgItems.length -1]; 
    containerItems.insertBefore(lastImgItem, imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');
    
    changeText();
}

const next = () => {
    containerItems.appendChild(imgItems[0]);
    imgItems = document.querySelectorAll('.img-item');

    changeText();
}

const changeText = () => {
    index = imgItems[1].id;
    containerTitles.innerHTML = titles[index].innerText;
    containerDescription.innerHTML = descriptions[index].innerText;
}

const btnpage = () => window.open(projectpages[index].url);

const btngit = () => window.open(gitpages[index].url);


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

document.querySelector('#btnpage').addEventListener('click', btnpage);
document.querySelector('#btngit').addEventListener('click', btngit);
