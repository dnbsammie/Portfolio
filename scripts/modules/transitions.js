// Preloader
export function initPreloader() {
    document.addEventListener("DOMContentLoaded", () => {
        const preloader = document.querySelector(".preloader");
        const mainContent = document.querySelector("main");

        mainContent.classList.add("hidden");

        setTimeout(() => {
            preloader.classList.add("preloader-exit");

            setTimeout(() => {
                preloader.style.display = "none";
                mainContent.classList.remove("hidden");
            }, 1000);
        }, 2000);
    });
}
// Page Transition
export function initPageTransitions() {
    const links = document.querySelectorAll('.nav a');
    const transitionDiv = document.querySelector('.transition_div');
    const main = document.querySelector('main');
    let isAnimating = false;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (isAnimating) return;

            isAnimating = true;
            const url = link.href;

            console.log(`Loading: ${url}`);
            transitionDiv.classList.add('animate_in');

            transitionDiv.addEventListener('transitionend', () => {
                fetch(url)
                    .then(response => response.text())
                    .then(htmlString => {
                        const parser = new DOMParser();
                        const newDocument = parser.parseFromString(htmlString, 'text/html');
                        const newMain = newDocument.querySelector('main');

                        if (newMain) {
                            main.innerHTML = newMain.innerHTML;
                        } else {
                            console.error('It was not found <main> in the uploaded file.');
                        }

                        transitionDiv.classList.remove('animate_in');
                        transitionDiv.classList.add('animate_out');

                        setTimeout(() => {
                            transitionDiv.classList.remove('animate_out');
                            isAnimating = false;
                        }, 1000);
                    })
                    .catch(error => {
                        console.error('Failed to load the page:', error);
                    });
            }, { once: true });
        });
    });
}
