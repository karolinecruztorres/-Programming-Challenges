let navigation = document.querySelector('.navigation');
let color = document.querySelector('#inputColor');
let body = document.querySelector('body');

navigation.onclick = function() {
    navigation.classList.toggle('active');
}

function pickColor() {
    body.style.background = color.value;
    document.documentElement.style.setProperty('--icon-hover-color', color.value);
}
