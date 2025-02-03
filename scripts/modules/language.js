// Language
const languages = {
    en: {
        buttonText: "ES",
        button1: "GET IN TOUCH",
        button2: "PORTFOLIO",
        button3: "RESUME",
        t1: "WHO I AM?",
        t2: "PROJECTS",
        p1: "With an interest in technology, innovation and continuous improvement, I seek to apply my knowledge in projects that positively impact society. Always looking for new opportunities to learn and grow professionally.",
        p2: "I'm focused on Java and other OOP languages. Aside from coding, I love music, sound, and motorsport. When I usually practice, my projects are focused on these aspects."
    },
    es: {
        buttonText: "EN",
        button1: "CONTACTO",
        button2: "PORTAFOLIO",
        button3: "CURRÍCULUM",
        t1: "¿QUIEN SOY?",
        t2: "PROYECTOS",
        p1: "Con interés en la tecnología, la innovación y la mejora continua, busco aplicar mis conocimientos en proyectos que impacten positivamente en la sociedad. Siempre buscando nuevas oportunidades para aprender y crecer profesionalmente.",
        p2: "Me centro en Java y otros lenguajes de POO. Aparte de la codificación, me encanta la música, el sonido y Automovilismo. Cuando suelo practicar, mis proyectos se centran en estos aspectos."
    }
};

const languageButton = document.getElementById("language");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(language) {
    currentLanguage = language;

    button1.textContent = languages[currentLanguage].button1;
    button2.textContent = languages[currentLanguage].button2;
    button3.textContent = languages[currentLanguage].button3;
    t1.textContent = languages[currentLanguage].t1;
    t2.textContent = languages[currentLanguage].t2;
    p1.textContent = languages[currentLanguage].p1;
    p2.textContent = languages[currentLanguage].p2;

    languageButton.textContent = languages[currentLanguage].buttonText;

    localStorage.setItem("language", currentLanguage);
}

languageButton.addEventListener("click", () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    changeLanguage(newLanguage);
});

changeLanguage(currentLanguage);
