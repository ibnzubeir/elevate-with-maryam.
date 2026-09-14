/* =========================================================
   ELEVATE WITH MARYAM
   Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------------
       SMOOTH SCROLLING
       ------------------------------------------------------- */

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* -------------------------------------------------------
       NAVBAR SCROLL EFFECT
       ------------------------------------------------------- */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 40) {
            navbar.style.background = "rgba(250, 247, 239, 0.94)";
            navbar.style.boxShadow =
                "0 15px 45px rgba(9, 39, 31, 0.15)";
        } else {
            navbar.style.background =
                "rgba(250, 247, 239, 0.78)";
            navbar.style.boxShadow =
                "0 10px 40px rgba(9, 39, 31, 0.10)";
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    /* -------------------------------------------------------
       SCROLL REVEAL ANIMATION
       ------------------------------------------------------- */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }


    /* -------------------------------------------------------
       FEELGREAT PURCHASE / REFERRAL LINKS
       ------------------------------------------------------- */

    const feelGreatLink =
        "https://ufeelgreat.com/c/1EB5FB";

    const feelGreatButtons =
        document.querySelectorAll(
            'a[href*="ufeelgreat.com"], .feelgreat-button'
        );

    feelGreatButtons.forEach(function (button) {

        button.setAttribute("href", feelGreatLink);
        button.setAttribute("target", "_blank");
        button.setAttribute("rel", "noopener noreferrer");

        button.addEventListener("click", function () {

            console.log(
                "Opening Elevate with Maryam FeelGreat referral page."
            );

        });
    });


    /* -------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------- */

    const whatsappLink =
        "https://wa.me/254791973806";

    const whatsappButtons =
        document.querySelectorAll(
            'a[href*="wa.me"], .whatsapp-button'
        );

    whatsappButtons.forEach(function (button) {

        button.setAttribute("href", whatsappLink);
        button.setAttribute("target", "_blank");
        button.setAttribute("rel", "noopener noreferrer");

    });


    /* -------------------------------------------------------
       BUTTON PRESS EFFECT
       ------------------------------------------------------- */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mousedown", function () {
            button.style.transform = "scale(0.97)";
        });

        button.addEventListener("mouseup", function () {
            button.style.transform = "";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "";
        });
    });


    /* -------------------------------------------------------
       IMAGE ERROR HANDLING
       ------------------------------------------------------- */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.warn(
                "Image could not be loaded:",
                image.getAttribute("src")
            );

            image.style.background = "#f2eadb";
        });
    });


    /* -------------------------------------------------------
       CURRENT YEAR
       ------------------------------------------------------- */

    const yearElements =
        document.querySelectorAll("[data-year]");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* -------------------------------------------------------
       ESCAPE KEY
       ------------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            document.activeElement.blur();
        }

    });


    /* -------------------------------------------------------
       WEBSITE LOADED
       ------------------------------------------------------- */

    console.log(
        "✨ Elevate with Maryam website loaded successfully."
    );

});
