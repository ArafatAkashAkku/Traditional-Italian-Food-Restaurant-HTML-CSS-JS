// navigation bar on scroll effect 
const navigationBar = document.getElementById('navigation-bar');

window.onscroll = () => {
    if (scrollY > 100) {
        navigationBar.style.backgroundColor = "black";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }
}

// navigation bar on click effect 
const phoneBar = document.getElementById('phone-bar');
const phoneNav = document.querySelector('.navbar');

phoneBar.onclick = () => {
    phoneNav.classList.toggle("active")

    if (phoneNav.classList.contains("active")) {
        phoneBar.classList.replace("fa-bars", "fa-xmark")
    } else {
        phoneBar.classList.replace("fa-xmark", "fa-bars")

    }
}

// navigation bar links on click effect 
const navLinks = document.querySelectorAll('header .navbar ul li')

navLinks.forEach((element)=>{
    element.onclick=()=>{
    phoneNav.classList.remove("active")
    phoneBar.classList.replace("fa-xmark", "fa-bars")
    }
})

// right click disable 
document.oncontextmenu=(element)=>{
    element.preventDefault();

}