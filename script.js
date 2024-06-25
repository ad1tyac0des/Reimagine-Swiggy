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

gsap.to(".food-items",{
    margin:"5vw",
    duration:2,
    scrollTrigger:".food_items"
})