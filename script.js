// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
}
