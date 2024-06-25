// Landing Pg Animation
gsap.to("#marquee", {
    x: 1595,
    duration: 2,
    scrollTrigger:{
        trigger: "#landing-pg",
        scroller: "body",
        // markers: true,
        scrub: 0.5,
        pin: true
    }
})


gsap.from("#headline", {
    y: 300,
    opacity: 0,
    duration: 1.2,
})

gsap.from("#menu-icon", {
    x: 90,
    opacity:0,
    duration: 0.8,
})


// Page-2 Animation

// const tl = gsap.timeline()

gsap.from("#page-2 #delicious-message", {
    x: -1000,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        // markers: true,
        start: "0 center",
        end: "center-=20 center",
        scrub: 2,
    }
})

gsap.from("#page-2 #menu-awaits", {
    x: 1000,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        // markers: true,
        start: "0 30%",
        end: "50% 50%",
        scrub: 2, 
        
    }
})
