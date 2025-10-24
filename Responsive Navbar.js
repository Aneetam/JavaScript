// Select elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Optional: close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);