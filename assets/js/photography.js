document.addEventListener("DOMContentLoaded", () => {

    // Smooth Scrolling
    const links = document.querySelectorAll(".nav-links a, .cta-button");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset for fixed navbar
                    behavior: "smooth"
                });

                // Close the menu on mobile after clicking
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove("active");
                    hamburgerMenu.setAttribute("aria-expanded", "false");
                }
            }
        });
    });

    // Copy Email to Clipboard
    const copyButton = document.querySelector(".copy-button");
    const emailElement = document.getElementById("email");

    if (copyButton && emailElement) {
        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(emailElement.innerText).then(() => {
                alert("Email address copied to clipboard!");
            }).catch(() => {
                alert("Failed to copy email address. Please try again.");
            });
        });
    }

    // Fade-in Effect for Sections on Scroll
    const sections = document.querySelectorAll("section");

    const fadeInOnScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPosition > sectionTop + 100) {
                section.classList.add("fade-in");
            } else {
                section.classList.remove("fade-in");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial check for sections already in view on load
});

// Hamburger menu toggle logic
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu visibility when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
    const isActive = navLinks.classList.contains('active');
    // Update aria-expanded attribute based on menu state
    navLinks.classList.toggle('active');
});
