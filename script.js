// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
}const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

window.addEventListener("scroll",()=>{

document.querySelectorAll(".skill").forEach(skill=>{

const top=skill.getBoundingClientRect().top;

if(top<window.innerHeight-100){

skill.style.opacity="1";

skill.style.transform="translateY(0px)";

}

});

});
