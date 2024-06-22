let menuPage = document.querySelector("#menu-page");
let menuIcon = document.querySelector("#menu-icon");
let cursor = document.querySelector("#cursor");
let cursorScale = document.querySelectorAll(".cursorScale");

// This function will execute when menuPage will open {Animating menuIcon through GSAP}
menuIcon.addEventListener("click", function () {
    if (!menuPage.classList.contains("menu-open")) {
        menuPage.classList.toggle("menu-open");
        menuIcon.classList.toggle('menuIcon-open');
        menuIcon.classList.toggle("menuIcon2-open")
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
        gsap.from("#social-media-icons a",{
            x: -50,
            duration: 1,
            opacity: 0,
            stagger: 0.1, 
        })
        // {Adding cursor follower}
        menuPage.addEventListener("mousemove", function (dets) {
            gsap.to(cursor, {
                x: dets.x,
                y: dets.y,
                duration: 0.8
            });
        });

        // The loop is used to add the same event listeners to multiple elements with the class .cursorScale
        cursorScale.forEach(element => {
            element.addEventListener("mouseenter", function () {
                gsap.to(cursor, {
                    scale: 4,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.4)",

                });
            });

            element.addEventListener("mouseleave", function () {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.8,

                });
            });
        });


    }

    // When menuPage is closed this code will excute.

    else if (menuPage.classList.contains("menu-open")) {
        menuPage.classList.remove("menu-open");
        menuIcon.classList.remove("menuIcon-open");
        menuIcon.classList.remove("menuIcon2-open")
        gsap.to("#menu-icon #span2", {
            x: 0,
            duration: 0.001,
            opacity: 1,
        });

        gsap.from("#menu-items h3", {
            opacity: 0,
            duration: 0.1,
        });
        gsap.from("#social-media-icons a",{
            opacity: 0,
            duration: 0.1,
        })
    }
});