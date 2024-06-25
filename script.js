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


