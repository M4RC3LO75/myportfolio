const itemsMenu = document.querySelectorAll('.item');
const burgerMenu = document.querySelector('div#burger');

itemsMenu.forEach((item) => {
    item.addEventListener('click', () =>{
        unselectItemMenu();
        item.classList.add('selected');
    });
});

function unselectItemMenu() {
    const itemSelected = document.querySelector('.selected');
    itemSelected.classList.remove('selected');
}

burgerMenu.addEventListener('click', clickMenu)

function sizeChanged(){
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function clickMenu(){
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}