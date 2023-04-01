// navigation bar on scroll effect and scroll progress bar

const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

window.onscroll = () => {
    if (scrollY > 100) {
        navigationBar.style.backgroundColor = "black";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }

    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff/cheight*100;
    let csswidth = Math.floor(100-progress);
    highlight.style.width=csswidth + "%";
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
const navLinks = document.querySelectorAll('header .navbar ul li a')

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

// cookie set 

const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie .right .accept");
const rejectBtn = document.querySelector(".cookie .right .reject");

setTimeout(() => {
    cookieBox.style.visibility = "visible"
}, 5000);

rejectBtn.onclick = () => {
    cookieBox.style.visibility = "hidden";
    setTimeout(() => {
        cookieBox.style.visibility = "visible"
    }, 60000);
}

acceptBtn.onclick = () => {
    document.cookie = "fname=Arafat; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "lname=Akash; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    }
    else {
        alert("Cookie can't be set");
    }
}

let check = document.cookie.indexOf("fname=Arafat");
check != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");