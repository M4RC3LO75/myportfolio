function sizeChanged(){
    if (window.innerWidth >= 768) {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
}
function clickMenu(){
    if (items.style.display == 'flex') {
        items.style.display = 'none'
    } else {
        items.style.display = 'flex'
    }
}