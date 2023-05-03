'use strict';

const images = [
    {'id': '0', 'url': './images/bg-login.png', 'innerText': 'Página de Login'},
    {'id': '1', 'url': './images/bg-drumkit.png', 'innerText': 'Drum Kit'},
    {'id': '2', 'url':'./images/bg-to-do-list-1.png', 'innerText': 'Lista de Tarefas'},
    {'id': '3', 'url': './images/bg-traffic-light.png', 'innerText': 'Semáforo'},
    {'id': '4', 'url': './images/bg-bulb.png', 'innerText': 'Lâmpada'},
    {'id': '5', 'url': './images/bg-calculator.png', 'innerText': 'Calculadora'},
]

const descriptions = [
    {'id': '0', 'innerText': 'Página de login usando Mobile First e Media Queries.'},
    {'id': '1', 'innerText': 'Divirta-se com sons de bateria clicando nos botões ou apertando as teclas do seu teclado.'},
    {'id': '2', 'innerText': 'Uma página de lista de tarefas criada com o uso de JavaScript.'},
    {'id': '3', 'innerText': 'Usando a liguagem JavaScript, pode-se clicar nos botões para acender a cor desejada, ou acionar a troca de cores automaticamente.'},
    {'id': '4', 'innerText': `Uma lâmpada que pode ser ligada ou desligada no botão.</br>Ao ser quebrada, o botão perde sua funcionalidade.`},
    {'id': '5', 'innerText': `Calculadora criada em JavaScript.`},
 ]

 const projectpages = [
    {'id': '0', 'url': 'https://m4rc3lo75.github.io/personal-projects/projeto-login/index.html'},
    {'id': '1', 'url': 'https://m4rc3lo75.github.io/personal-projects/drumkit/index.html'},
    {'id': '2', 'url': 'https://m4rc3lo75.github.io/personal-projects/to-do-list/index.html'},
    {'id': '3', 'url': 'https://m4rc3lo75.github.io/personal-projects/semaphore/index.html'},
    {'id': '4', 'url': 'https://m4rc3lo75.github.io/personal-projects/lampada/index.html'},
    {'id': '5', 'url': 'https://m4rc3lo75.github.io/personal-projects/calculator/index.html'},
 ]

 const gitpages = [
    {'id': '0', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/projeto-login'},
    {'id': '1', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/drumkit'},
    {'id': '2', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/to-do-list'},
    {'id': '3', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/semaphore'},
    {'id': '4', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/lampada'},
    {'id': '5', 'url': 'https://github.com/M4RC3LO75/personal-projects/tree/main/calculator'},
 ]

const containerItems = document.querySelector('#container-items');
const containerTitles = document.querySelector('#title');
const containerDescription = document.querySelector('#description');
var index = 1;


const loadImages = (images, container) => {
    images.forEach (image => {container.innerHTML += `<div class='img-item' id='${image.id}'><img src='${image.url}'></div>`});
    containerTitles.innerHTML = images[index].innerText;
    containerDescription.innerHTML = descriptions[index].innerText;
}

loadImages (images, containerItems, containerTitles);

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
    containerTitles.innerHTML = images[index].innerText;
    containerDescription.innerHTML = descriptions[index].innerText;
}

const btnpage = () => window.open(projectpages[index].url);

const btngit = () => window.open(gitpages[index].url);


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

document.querySelector('#btnpage').addEventListener('click', btnpage);
document.querySelector('#btngit').addEventListener('click', btngit);
