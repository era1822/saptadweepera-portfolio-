// =============================
// Smooth Scrolling
// =============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});


// =============================
// Active Navigation
// =============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// =============================
// Skill Animation
// =============================

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".skill").forEach(skill=>{

        const top = skill.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            skill.style.opacity="1";
            skill.style.transform="translateY(0)";
        }

    });

});

// =============================
// Floating Pearl Particles
// =============================

tsParticles.load("particles-js", {

    background: {
        color: {
            value: "#081b29"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 70
        },

        color: {
            value: [
                "#ffffff",
                "#f8f8ff",
                "#f5f5f5",
                "#e6e6fa",
                "#d4af37"
            ]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: {
                min: 0.25,
                max: 0.9
            }
        },

        size: {
            value: {
                min: 2,
                max: 9
            }
        },

        move: {
            enable: true,
            speed: 0.4,
            random: true,
            direction: "none"
        },

        links: {
            enable: false
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble"
            }
        },

        modes: {
            bubble: {
                distance: 150,
                size: 12,
                duration: 2,
                opacity: 1
            }
        }
    }
});
