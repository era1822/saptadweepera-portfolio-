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

    background:{
        color:{
            value:"#081b29"
        }
    },

    fpsLimit:60,

    particles:{

        number:{
            value:80
        },

        color:{
            value:[
                "#ffffff",
                "#d4af37",
                "#00d4ff"
            ]
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:0.7
        },

        size:{
            value:{
                min:2,
                max:6
            }
        },

        move:{
            enable:true,
            speed:0.6,
            direction:"none",
            random:true,
            straight:false
        },

        links:{
            enable:false
        }

    },

    interactivity:{

        events:{
            onHover:{
                enable:true,
                mode:"repulse"
            }
        },

        modes:{
            repulse:{
                distance:120
            }
        }

    }

});
