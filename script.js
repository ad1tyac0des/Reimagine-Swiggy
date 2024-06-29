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

// About Page Animation
let tl = gsap.timeline();
const aboutImg1 = document.querySelector("#part2-img1");
const aboutImg2 = document.querySelector("#part2-img2");

gsap.from("#aboutPart-1 h1",{
    y:35,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutPart-1 h1",
        scroller: "body",
        // markers: true,
        start: 'top-=50% center',
        end: "bottom bottom",
       
    }
})
gsap.from("#paragraph p",{
    y:30,
    opacity:0,
    duration:0.5,
    stagger:0.8,
    scrollTrigger: {
        trigger: "#paragraph p",
        scroller: "body",
        // markers: true,
        start: 'top-=50% center',
        end: "bottom bottom",
       
    }
})
tl.from(aboutImg1, {
    x: 1300,
    rotate:-45,
    duration: 2,
    scrollTrigger: {
        trigger: aboutImg1,
        scroller: "body",
        // markers: true,
        start: 'top+=30% center',
        end: "bottom bottom",
        scrub:1
    }
});

tl.from(aboutImg2,{
    x:800,
    rotate:-8,
    duration:2,
    scrollTrigger:{
        trigger:aboutImg2,
        scroller:'body',
        // markers:true,
        scrub:1,
        start:"top-=70% center",
        end: "bottom bottom",
    }
})