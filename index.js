const addClass = document.getElementById("addClass");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    if (addClass.style.display === "none") {
        addClass.style.display = "block";
    } else {
        addClass.style.display = "none";

    }
});

// // on scroll sticky with animation
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutMeLink = document.getElementById("abo");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        const aboutMeSection = document.getElementById("abou");
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutMeLink = document.getElementById("home");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        const aboutMeSection = document.getElementById("loder-container");
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutMeLink = document.getElementById("pro");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        const aboutMeSection = document.getElementById("proj");
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    });
});


    
