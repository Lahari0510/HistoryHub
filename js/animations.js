document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on page load
});
