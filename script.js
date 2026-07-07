// =========================
// Typing Animation
// =========================

const text = [
    "Public Health Student",
    "Python Data Analyst",
    "Machine Learning Enthusiast",
    "Researcher",
    "Biostatistics Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

        return;

    }

    setTimeout(type, 100);

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 300);

        return;

    }

    setTimeout(erase, 50);

}

// =========================
// Navbar Background
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.style.background = window.scrollY > 50 ?
        "rgba(0,0,0,.75)" :
        "rgba(255,255,255,.05)";

});

// =========================
// Scroll Reveal Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: .2 });

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".8s";

    observer.observe(section);

});

// =========================
// Active Menu Highlight
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Button Hover Animation
// =========================

document.querySelectorAll(".btn,.btn2").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// Floating Particles
// =========================

for (let i = 0; i < 25; i++) {

    let star = document.createElement("span");

    star.className = "particle";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration = (3 + Math.random() * 5) + "s";

    star.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(star);

}

// =========================
// Mouse Glow Effect
// =========================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "200px";
glow.style.height = "200px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "rgba(0,171,240,.15)";
glow.style.filter = "blur(60px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 100 + "px";

    glow.style.top = e.clientY - 100 + "px";

});

// =========================
// Console Welcome
// =========================

console.log("%cWelcome to Era's Portfolio 💙",
    "color:#00abf0;font-size:20px;font-weight:bold;");