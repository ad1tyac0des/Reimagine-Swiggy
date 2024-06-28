let main = document.querySelector("#main")
let menuPage = document.querySelector("#menu-page");
let menuIcon = document.querySelector("#menu-icon");
let cursorScale = document.querySelectorAll(".cursorScale");
let circle = document.querySelector("#circle")
// let foodBox = document.querySelector(".food-box")
// {Adding cursor follower}

main.addEventListener("mousemove", function (event) {
    gsap.to(circle, {
        x: event.x,
        y: event.y,
        // duration:0.8,
        ease: "sine",
    })

    // -----------------
})

// This function will execute when menuPage will open {Animating menuIcon through GSAP}
menuIcon.addEventListener("click", function () {
    if (!menuPage.classList.contains("menu-open")) {
        menuPage.classList.toggle("menu-open");
        menuIcon.classList.toggle('menuIcon-open');

        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 1000)
        gsap.to("#menu-icon #span2", {
            x: 50,
            duration: 0.001,
            opacity: 0,
        });

        gsap.from("#menu-items h3", {
            x: 50,
            duration: 1,
            opacity: 0,
            stagger: 0.1,
        });
        gsap.from("#social-media-icons a", {
            x: -50,
            duration: 1,
            opacity: 0,
            stagger: 0.1,
        })


        // The loop is used to add the same event listeners to multiple elements with the class .cursorScale
        cursorScale.forEach(element => {
            element.addEventListener("mouseenter", function () {
                gsap.to(circle, {
                    scale: 4,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.4)",

                });
            });

            element.addEventListener("mouseleave", function () {
                gsap.to(circle, {
                    scale: 1,
                    duration: 0.8,

                });

            });
        });
        circle.style.mixBlendMode = "difference"
        circle.style.backgroundColor = "white"
        circle.style.height = "20px"
        circle.style.width = "20px"
    }

    // When menuPage is closed this code will excute.

    else if (menuPage.classList.contains("menu-open")) {
        menuPage.classList.remove("menu-open");
        menuIcon.classList.remove("menuIcon-open");

        document.body.style.overflowY = "";
        gsap.to("#menu-icon #span2", {
            x: 0,
            duration: 0.001,
            opacity: 1,
        });

        gsap.from("#menu-items h3", {
            opacity: 0,
            duration: 0.1,
        });
        gsap.from("#social-media-icons a", {
            opacity: 0,
            duration: 0.1,
        })


        circle.style.mixBlendMode = "";
        circle.style.height = "";
        circle.style.width = "";
        circle.style.backgroundColor = "rgba(32, 32, 32, 0.8)"
    }
});

