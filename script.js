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
