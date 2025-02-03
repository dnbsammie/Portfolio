import "./modules/background.js";
import "./modules/language.js";
import "./modules/navbar.js";
import "./modules/projects.js";
import { initPreloader } from './modules/transitions.js';
import { initPageTransitions } from './modules/transitions.js';

initPreloader();
initPageTransitions();

document.addEventListener("DOMContentLoaded", () => {
    console.log("All scripts have been loaded correctly.");
});
