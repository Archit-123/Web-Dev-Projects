const menuicon = document.querySelector('.ham-menu');
const navbar = document.querySelector('.navbar-main');
menuicon.addEventListener('click', ()=>{
    navbar.classList.toggle("change");
});
