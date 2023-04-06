const menuBtn=document.querySelector('.navbar-brand');
const handburger=document.querySelector( '.navbar-toggle-icon');
const nav=document.querySelector('.navbar');
const menuNav=document.querySelector('.collapse');
const navItems=document.querySelectorAll('.nav-item');

let showMenu =false;
menuBtn.addEventListener('click',toggleMenu);
function toggleMenu(){
    if(!showMenu){
        handburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item =>item.classList.add('open'));
        showMenu=true;
    }else{
        handburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item =>item.classList.remove('open'));
        showMenu=false;
    }
}