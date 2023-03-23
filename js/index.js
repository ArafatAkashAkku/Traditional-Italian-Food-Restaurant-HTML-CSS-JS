const navigationBar = document.getElementById('navigation-bar');

window.onscroll=()=>{
    if(scrollY>100){
        navigationBar.style.backgroundColor="black";
    }
    else{
        navigationBar.style.backgroundColor="transparent";
    }
}