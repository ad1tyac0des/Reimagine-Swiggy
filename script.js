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


// Swiper Js Implement
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});


