const circleType = new CircleType(document.getElementById('rotated'));
// project
var clientHeight = document.querySelector('.about').clientHeight,
    hclientHeight = document.querySelector('.home').clientHeight,
    $cursor = document.querySelector(".cursor"),
    $overlay = document.querySelectorAll(".project-overlay");

function moveCircle(e) {
    console.log(e.pageX, e.pageY, clientHeight + hclientHeight)
    gsap.to($cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY - (clientHeight + hclientHeight + (clientHeight / 7))
        },
        delay: 0.03
    });
}
document.querySelector(".p-1").addEventListener("mouseover", function() {
    document.querySelector(".cursor").style.backgroundImage = "url(assets/angular.png)";
})

document.querySelector(".p-2").addEventListener("mouseover", function() {
    document.querySelector(".cursor").style.backgroundImage = "url(assets/react.jpeg)";
})

document.querySelector(".p-3").addEventListener("mouseover", function() {
    document.querySelector(".cursor").style.backgroundImage = "url(assets/nodejs.png)";
})

document.querySelector(".p-4").addEventListener("mouseover", function() {
    document.querySelector(".cursor").style.backgroundImage = "url(assets/mongodb.jpg)";
})

var flag = false;

$overlay.forEach(element => {
    element.addEventListener('mousemove', () => {
        flag = true;
        gsap.to($cursor, 0.3, {
            scale: 1,
            autoAlpha: 1
        });
        element.addEventListener('mousemove', moveCircle)
    })
    element.addEventListener('mouseout', () => {
        flag = false;
        gsap.to($cursor, 0.3, {
            scale: 0.1,
            autoAlpha: 0
        });
    })
});

// navbar
const navbtn = document.querySelector('.burger');
var navtl = gsap.timeline({ defaults: { duration: 1 } })
navtl.paused(true);
navtl.to('.navBefore', { width: "100%" });
navtl.to('.nav-item', { width: "100%" }, "-=.5");
navtl.to('li', { opacity: 1, stagger: 0.1 })
navtl.reverse();
navbtn.addEventListener('click', () => {
    navtl.reversed(!navtl.reversed());
    navbtn.classList.toggle("toggle");
})

// navbar scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > hclientHeight ||
        document.documentElement.scrollTop > hclientHeight) {
        document.querySelector('.nav').style.background = '#0f0f0f'
        if (document.body.scrollTop) {
            document.querySelector('.nav').style.display = 'none'
        } else {
            document.querySelector('.nav').style.display = 'block'
        }
    } else {
        document.querySelector('.nav').style.background = 'transparent'
    }
}

// home
var homepage = gsap.timeline({
    defaults: {
        duration: 2,
        ease: Expo.easeInOut,
        opacity: 0,
        y: 20
    }
})
homepage.from(".logo", { delay: 4 });
homepage.from(".menu", { delay: .1 }, "-=2");
homepage.from(".listensong .smedia ion-icon", { delay: .1, stagger: 0.1, }, "-=2");
homepage.from(".rotatethis", { delay: .1 }, "-=2");

gsap.fromTo(".hero-title h1", {
    duration: 0.3,
    x: -6,
    y: 2,
    opacity: 0,
}, {
    delay: 6,
    x: 6,
    y: -2,
    opacity: 1,
    ease: "rough({strength: 8, points: 40, template: Linear.easeNone, randomize: false})",
    clearProps: "all"
});

gsap.fromTo(".hero-title p", {
    duration: 0.3,
    x: -6,
    y: 2,
    opacity: 0,
}, {
    delay: 7,
    x: 6,
    y: -2,
    opacity: 1,
    ease: "rough({strength: 8, points: 40, template: Linear.easeNone, randomize: false})",
    clearProps: "all"
});

ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-container",
                start: "top center",
                end: "top 100px",
                scrub: true,
                // markers: true
            }
        });
        tl2.from('.about-img', { yPercent: -100, duration: 3, opacity: 0 })
        tl2.from('.about-content h3', { yPercent: 100, duration: 2, skewY: 5, opacity: 0 }, '-=1')
        tl2.from('.about-content p', { yPercent: 100, duration: 2, skewY: 5, stagger: 1, opacity: 0 }, '-=1')
        tl2.from('.about-button', { xPercent: 400, duration: 3, opacity: 0 }, '-=1')
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "top 100",
                scrub: true,
                scrub: true,
            }
        });
        timeline.from('.timeline ul li', { yPercent: 100, duration: 2, stagger: 1, opacity: 0 })

        const wrapper = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top center",
                end: "top 100",
                scrub: true,
                scrub: true,
            }
        });

        wrapper.from('.project-title', { yPercent: -200, duration: 2, opacity: 0 })
        wrapper.from('.project-categ', { yPercent: -200, duration: 2, opacity: 0 }, "-=2")

        const contactTable = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top center",
                end: "top 100",
                scrub: true,
                scrub: true,
            }
        });

        contactTable.from('table', { yPercent: 200, duration: 2, opacity: 0 })
        contactTable.from('tr', { yPercent: 200, duration: 2, stagger: 1, opacity: 0 })
        contactTable.from('.copyright', { yPercent: 200, duration: 2, opacity: 0 }, "-=2")
    },
    // mobile
    "(max-width: 799px)": function() {
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-img",
                start: "top center",
                end: "top 100",
                scrub: true,
                // markers: true
            }
        });
        tl2.from('.about-img', { yPercent: -100, duration: 3, opacity: 0 })
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-content",
                start: "top center",
                end: "top 100",
                scrub: true,
                // markers: true
            }
        });
        tl3.from('.about-content h3', { yPercent: 100, duration: 2, skewY: 5, opacity: 0 }, '-=1')
        tl3.from('.about-content p', { yPercent: 100, duration: 2, skewY: 5, stagger: 1, opacity: 0 }, '-=1')
        tl3.from('.about-button', { xPercent: 400, duration: 3, opacity: 0 }, '-=1')
        const container = gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                start: "top center",
                end: "top 100",
                scrub: true,
                // markers: true
            }
        });
        container.from('.timeline ul li', { yPercent: 100, duration: 2, stagger: 1, opacity: 0 })
        const wrapper = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top center",
                end: "top 100",
                scrub: true,
                scrub: true,
            }
        });

        wrapper.from('.project-title', { yPercent: -200, duration: 2, opacity: 0 })
        wrapper.from('.project-categ', { yPercent: -200, duration: 2, opacity: 0 }, "-=2")
    }
})