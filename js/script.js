let btnMenu = document.querySelector(".menuHamburguer")
let menu = document.querySelector(".menu")
let imgHamburguer = document.querySelector('.hamburguer')

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('activer')

    menu.classList.contains('activer')? imgHamburguer.src = "./images/icon-close.svg":imgHamburguer.src = "./images/icon-hamburger.svg"
})