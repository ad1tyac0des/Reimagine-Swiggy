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


// _______________________________________________________
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


// _______________________________________________________


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
        y: screenHeight - boxHeight - 70,
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
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 500,
            // pauseOnMouseEnter: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
}
swiperDishList();


function page3HeadingAnimation() {
    gsap.from("#page-3 h1", {
        y: 60,
        duration: 0.8,
        delay: 0.6,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page-3",
            scroller: "body",
            // markers: true,
            start: "top-=2% 70%",
            toggleActions: "play none none reverse"
        }
    })

    gsap.from("#page-3 hr", {
        // y: 50,
        width: 0,
        duration: 2,
        delay: 0.7,
        scrollTrigger: {
            trigger: "#page-3",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    })
}
page3HeadingAnimation()

//---------> Page-4 Animation
gsap.to("#resturant-img1", {
    scrollTrigger: {
        trigger: "#resturant-page",
        scroller: "body",
        start: "top-=200px 20%",
        end: "bottom-=200px center",
        scrub: true,
        // markers:true,
    },
    backgroundPositionY: "-50%"
});

gsap.to("#resturant-img2", {
    scrollTrigger: {
        trigger: "#resturant-page",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
    y: -300
});

gsap.to("#our-resturant h1", {
    scrollTrigger: {
        trigger: "#resturant-page",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "bottom -10%",
        scrub: true,
    },
    y: -200
});

gsap.from("#bullet", {
    x:-30,
    opacity:0,
    duration: 0.6,
    scrollTrigger:{
        trigger: "#bullet",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
})

gsap.from("#line1", {
    width: 0,
    duration: 0.6,
    scrollTrigger:{
        trigger: "#bullet",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
})


// About Page Animation
let tl = gsap.timeline();
const aboutImg1 = document.querySelector("#part2-img1");
const aboutImg2 = document.querySelector("#part2-img2");

gsap.from("#aboutPart-1 h1", {
    y: 35,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutPart-1 h1",
        scroller: "body",
        // markers: true,
        start: 'top-=50% center',
        end: "bottom bottom",
        toggleActions: "play none none reverse"
    }
})
gsap.from("#paragraph p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.8,
    scrollTrigger: {
        trigger: "#paragraph p",
        scroller: "body",
        // markers: true,
        start: 'top-=50% center',
        end: "bottom bottom",
        toggleActions: "play none none reverse"
    }
})
tl.from(aboutImg1, {
    x: 1300,
    rotate: -45,
    duration: 2,
    scrollTrigger: {
        trigger: aboutImg1,
        scroller: "body",
        // markers: true,
        start: 'top+=30% center',
        end: "bottom bottom",
        scrub: 1
    }
});

tl.from(aboutImg2, {
    x: 800,
    rotate: -8,
    duration: 2,
    scrollTrigger: {
        trigger: aboutImg2,
        scroller: 'body',
        // markers:true,
        scrub: 1,
        start: "top-=70% center",
        end: "bottom bottom",
    }
})

// Footer starts now

function copyrightAnimation() {
    gsap.from("#copyright", {
        y: 30,
        opacity: 0.5,
        duration: 0.4,
        scrollTrigger: {
            trigger: "#copyright",
            scroller: "body",
            // markers: true,
            start: "bottom bottom",
            toggleActions: "play none none reverse"
        }
    })

}
copyrightAnimation()


