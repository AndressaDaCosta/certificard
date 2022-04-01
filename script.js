let dark_mode_toggle = document.querySelector(".dark-mode-switch");

dark_mode_toggle.onclick = () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
};