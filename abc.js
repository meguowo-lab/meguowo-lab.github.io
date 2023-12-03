const toggle = document.querySelector(".menu-toggle-div input")
const hamburgerMenu = document.querySelector(".center-end-wraper")
toggle.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("open")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-post")
        }
    })
})

const obsPosts = document.querySelectorAll(".blog-card")
obsPosts.forEach((el) => observer.observe(el))

window.onbeforeunload = () => {
    window.scroll(0, 0);
};

const labels = document.querySelectorAll("input")

labels.forEach((label) => {
    label.addEventListener("click", function(){
        alert(label.parentElement.parentElement.id)
    })
}
)