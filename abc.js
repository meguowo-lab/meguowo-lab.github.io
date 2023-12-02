const toggle = document.querySelector(".menu-toggle-div input")
const hamburgerMenu = document.querySelector(".center-end-wraper")
const likeButtonCircle = document.getElementById("like-btn-circle")
toggle.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("open")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-post")
        }
        else{
            entry.target.classList.remove("show-post")
        }
    })
})

const obsPosts = document.querySelectorAll(".blog-card")
obsPosts.forEach((el) => observer.observe(el))

function hello(){
    likeButtonCircle.classList.toggle("like-pressed")
}