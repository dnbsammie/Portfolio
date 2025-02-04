// Preloader
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector("main");

mainContent.classList.add("hidden");

let preloaderTimeout;

const forcePreloaderExit = () => {
    preloader.classList.add("preloader-exit");
    setTimeout(() => {
        preloader.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 1000);
};

preloaderTimeout = setTimeout(forcePreloaderExit, 5000);

document.addEventListener("DOMContentLoaded", () => {
    clearTimeout(preloaderTimeout);
    setTimeout(forcePreloaderExit, 2000);
});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});