const buttons = document.querySelectorAll(".footer-buttons button");
const themeLink = document.getElementById("themeStylesheet");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const theme = button.getAttribute("data-theme");

        // Change CSS
        themeLink.setAttribute("href", theme);

        // Active button highlight
        buttons.forEach(btn => btn.classList.remove("active-theme"));
        button.classList.add("active-theme");
    });
});