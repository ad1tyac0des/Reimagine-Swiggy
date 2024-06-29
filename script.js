//--------> Landing Pg Animation

function headlineAnimation() {
    gsap.from("#headline", {
        y: 120,
        opacity: 0,
        duration: 1.2,
    })
}
headlineAnimation()


function headlineDescriptionAnimation() {
    gsap.from("#headline-description", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
    })

}
headlineDescriptionAnimation()


function menuIconAnimation() {
    gsap.from("#menu-icon", {
        x: 100,
        opacity: 0,
        duration: 1,
    })

}
menuIconAnimation()


function marqueeAnimation() {
    let stripWidth = document.querySelector("#strip").offsetWidth
    let marqueeWidth = document.querySelector("#marquee").offsetWidth
    // console.log(stripWidth-marqueeWidth) //changes acc to display size
    gsap.to("#marquee", {
        x: (stripWidth - marqueeWidth) - 20,
        duration: 2,
        scrollTrigger: {
            trigger: "#landing-pg",
            scroller: "body",
            // markers: true,
            scrub: 0.5,
            pin: true
        }
    })
}
marqueeAnimation()


//--------> Page-2 Animation

function page2textanimations() {
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
}
page2textanimations()


function fillerAnimation() {
    let screenWidth = document.querySelector("#page-2").offsetWidth
    let screenHeight = document.querySelector("#page-2").offsetHeight
    let boxHeight = document.querySelector(".filler-box").offsetHeight

    let tl = gsap.timeline()
    tl.to(".filler-box", {
        y: screenHeight-boxHeight-50,
        duration: 0.5,
        rotate: 720,
        scrollTrigger: {
            trigger: ".filler-box",
            scroller: "body",
            // markers: true,
            start: "-15% 70%",
            scrub: 2,
        }
    })

    tl.to(".filler-box", {
        x: -[(screenWidth / 3) + screenWidth / 7.7],
        duration: 1,
        rotate: 720,
        delay: 1,
        scrollTrigger: {
            trigger: ".filler-box",
            scroller: "body",
            // markers: true,
            start: "650px 60%", 
            end: "900px 20%",
            scrub: 2,
        }
    })
}
fillerAnimation()

//--------> Page-3 Animation

// Swiper Js Implement

function swiperDishList() {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        // spaceBetween: 240,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        }
    })

}
swiperDishList()


function page3HeadingAnimation(){
    gsap.from("#page-3 h1", {
        y: 60,
        duration: 0.8,
        delay: 0.6,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page-3",
            scroller: "body",
            // markers: true,
            start: "top-=2% 70%"
        }
    })
    
    gsap.from("#page-3 hr", {
        // y: 50,
        width: 0,
        duration: 2,
        delay: 0.8,
        scrollTrigger:{
            trigger: "#page-3",
            scroller: "body",
            // markers: true,
            start: "top 70%",
        }
    })
}
page3HeadingAnimation()  