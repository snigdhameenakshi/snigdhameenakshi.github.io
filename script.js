function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
});

// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 250;
        const height = section.offsetHeight;

        if(top > offset && top < offset + height){
            section.classList.add("show");
        }

    });

});
