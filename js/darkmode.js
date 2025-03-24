document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save preference to local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Load preference when page loads
window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
};
