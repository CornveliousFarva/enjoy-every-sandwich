// Adding class navbarDark on navbard acroll
const header = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('navbarDark')
    }
    else{
        header.classList.remove('navbarDark')
    }
}

// Dark mode script
function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode")
}