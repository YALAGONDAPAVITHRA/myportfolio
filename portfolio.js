var typed = new Typed(".text",{ 
    strings:["Frontend Developer.","Web Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
// Sticky Navbar

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');
 
// this is an shadow color

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
// Dark Mode

let dark_mode = document.querySelector('#dark_mode');
 
dark_mode.onclick = () => {
    if(dark_mode.classList.contains('bx-moon')){
        dark_mode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        dark_mode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}