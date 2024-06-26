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

gsap.to(".burger",{
    x:-450,
    duration:2,
    scrollTrigger:".food-img"
})

gsap.to(".pizza",{
    x:-150,
    duration:2,
    scrollTrigger:".food-img"
})

gsap.to(".main",{
    x:150,
    duration:2,
    scrollTrigger:".food-img"
})

gsap.to(".momo",{
    x:450,
    duration:2,
    scrollTrigger:".food-img"
})

