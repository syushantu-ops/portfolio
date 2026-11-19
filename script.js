console.log("Welcome to Sushant's Portfolio!");

const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Sushant Neupane. All rights reserved.`;

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

const projectLinks = document.querySelectorAll(".project a");

projectLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Opening project: " + this.textContent);
    });
});
