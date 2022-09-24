
let mainImage = document.getElementById('image-container');
let images = document.getElementsByClassName('images')

function mouseOver(p) {
    let att = getAttribute('src')
    mainImage.setAttribute('src', att)
}

function mouseOut() {
    mainImage.removeAttribute('src');
}