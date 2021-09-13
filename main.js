//--------- Hamburger Menu ---------
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navLinks.forEach(link => link.addEventListener('click', close));

function show(){
  mainMenu.style.top = '0';
}
function close(){
  mainMenu.style.top = '-100%'
}
//---------- End Of hamburger menu ------
