const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav--mobile');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('hide');
})