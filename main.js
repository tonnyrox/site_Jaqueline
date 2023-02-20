var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'img/close.png') {
        iconMenu.setAttribute("src","img/menu.png");
    }else{
        iconMenu.setAttribute("src","img/close.png");
    }

   menu.classList.toggle('active');
});