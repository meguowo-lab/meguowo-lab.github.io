const toggle = document.querySelector(".menu-toggle-div input")
const hamburgerMenu = document.querySelector(".center-end-wraper")
toggle.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("open")
})