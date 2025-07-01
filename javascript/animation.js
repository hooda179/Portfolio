const header = document.querySelectorAll("header");
const aboutLeft = document.querySelectorAll("section.about .container .left");
const aboutRight = document.querySelectorAll("section.about .container .right");
const skillsLeft = document.querySelectorAll("section.skills .left")
const skillsRight = document.querySelectorAll("section.skills .right")
const work = document.querySelectorAll("section.work .container .item")
const contacts = document.querySelectorAll(".contact .container")

const home = document.querySelector("nav ul li.home")
const about = document.querySelector("nav ul li.about")
const skills = document.querySelector("nav ul li.skills")
const works = document.querySelector("nav ul li.work")
const contact = document.querySelector("nav ul li.contact")

const bars = document.querySelector("nav .bars i")
const nav = document.querySelector("nav .bars ul")

const contactBtn = document.getElementById("contact-me")

// function to animate
function animate(animation,elements){
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry,idx) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(animation);
            
        }
    })
},{threshold: 0.1});
elements.forEach(element => {
    observer.observe(element)
});
}

animate("show-header",header)
animate("show-about",aboutLeft)
animate("show-about",aboutRight)
animate("show-skills", skillsLeft)
animate("show-skills", skillsRight)
animate("show-work", work)
animate("show-contacts", contacts)

function scroll(btn,destination){
    btn.addEventListener("click",()=>{
        destination[0].scrollIntoView({behavior: "smooth"});
    })
}

scroll(home,header);
scroll(about,aboutLeft);
scroll(skills, skillsLeft);
scroll(works,work)
scroll(contact,contacts)
scroll(contactBtn,contacts)

bars.addEventListener("click",()=>{
    nav.classList.toggle("show");
})
