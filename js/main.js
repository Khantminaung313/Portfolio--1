let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar')
let scrollbar = document.querySelector('.scroll-bar')

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.onscroll= () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    scrollindicator();
}

function scrollindicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollbar.style.width = percentage + '%';
}
