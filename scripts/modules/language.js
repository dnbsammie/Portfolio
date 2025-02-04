// Language
const languages = {
    en: {
        // Buttons
        languageButton: "ES",
        button1: "PORTFOLIO",
        button2: "GET IN TOUCH",
        button3: "RESUME",
        // Navs
        nav1: "HOME",
        nav2: "ABOUT",
        nav3: "PROJECTS",
        nav4: "SKILLS",
        nav5: "MUSIC",
        nav6: "CONTACT",
        // Titles
        t1: "WHAT ABOUT ME?",
        t2: "PROJECTS",
        t3: "SKILLS",
        t4: "WHAT CAN I DO?",
        t5: "GET IN TOUCH",
        // Texts
        hx1: "problem-solving",
        hx2: "innovation",
        hx3: "organization",
        hx4: "communication",
        hx5: "critical-thinking",
        hx6: "creativity",
        // Paragraphs
        p1: "Hi, i'm Samuel, a software developer originally from Bogotá D.C. I love working on challenging projects that combine aesthetics and functionality. Also, outside of programming, I enjoy music, motorsport and exploring new ideas that inspire me. I always seek to learn and improve, both professionally and personally, to offer the best in each project.",
        p2: "Developing robust Java applications",
        p3: "I design and create responsive and animated websites in HTML and CSS.",
        p4: "I develop vst plugins with C++ and JUCE, used in my musical projects.",
        p5: "I create and design 2D and 3D video games using C# in Unity.",
        p6: "A section dedicated to my personal bio.",
        p7: "A visual compilation of previous works.",
        p8: "Learn about my abilities.",
        p9: "Explore a sound gallery.",
        p10: "Send an Email for work, collaborations, and more.",
        // Other
        copyright: "© 2025 Samuel Rivera. All rights reserved."
    },
    es: {
        // Buttons
        languageButton: "EN",
        button1: "PORTAFOLIO",
        button2: "PONTE EN CONTACTO",
        button3: "CURRÍCULUM",
        // Navs
        nav1: "INICIO",
        nav2: "SOBRE MI",
        nav3: "PROYECTOS",
        nav4: "HABILIDADES",
        nav5: "MÚSICA",
        nav6: "CONTACTO",
        // Titles
        t1: "SOBRE MI?",
        t2: "PROYECTOS",
        t3: "HABILIDADES",
        t4: "QUE PUEDO HACER?",
        t5: "PONTE EN CONTACTO",
        // Texts
        hx1: "resolución de problemas",
        hx2: "inovación",
        hx3: "organización",
        hx4: "comunicación",
        hx5: "pensamiento crítico",
        hx6: "creatividad",
        // Paragraphs
        p1: "Hola, soy Samuel, un desarrollador de software originario de Bogotá D.C. Me encanta trabajar en proyectos desafiantes que combinen estética y funcionalidad. Además, fuera de la programación, disfruto de la música, el automovilismo y explorar nuevas ideas que me inspiren. Siempre busco aprender y mejorar, tanto en lo profesional como en lo personal, para ofrecer lo mejor en cada proyecto.",
        p2: "Desarrollo de aplicaciones robustas en Java.",
        p3: "Diseño y creo sitios web responsivos y animados con HTML y CSS.",
        p4: "Desarrollo plugins vst con C++ y JUCE, usados en mis proyectos musicales.",
        p5: "Creo y diseño videojuegos 2D y 3D usando C# en Unity",
        p6: "En caso de que quieras volver a revisar el sitio.",
        p7: "Una sección dedicada a mi biografía personal.",
        p8: "Conoce acerca de mis habilidades",
        p9: "Explora una galería musical.",
        p10: "Enviar un correo electrónico para trabajo, colaboraciones y más.",
        // Other
        copyright: "© 2025 Samuel Rivera. Todos los derechos reservados."
    }
};
let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(language) {
    currentLanguage = language;

    const elements = {

        languageButton: "language",
        button1: "button1",
        button2: "button2",
        button3: "button3",
        nav1: "nav1",
        nav2: "nav2",
        nav3: "nav3",
        nav4: "nav4",
        nav5: "nav5",
        nav6: "nav6",
        t1: "t1",
        t2: "t2",
        t3: "t3",
        t4: "t4",
        t5: "t5",
        hx1: "hx1",
        hx2: "hx2",
        hx3: "hx3",
        hx4: "hx4",
        hx5: "hx5",
        hx6: "hx6",
        p1: "p1",
        p2: "p2",
        p3: "p3",
        p4: "p4",
        p5: "p5",
        p6: "p6",
        p7: "p7",
        p8: "p8",
        p9: "p9",
        p10: "p10",
        copyright: "copyright"
    };

    Object.keys(elements).forEach(key => {
        const element = document.getElementById(elements[key]);
        if (element) {
            element.textContent = languages[currentLanguage][key];
        }
    });

    localStorage.setItem("language", currentLanguage);
}

document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.getElementById("language");
    if (languageButton) {
        languageButton.addEventListener("click", () => {
            const newLanguage = currentLanguage === "en" ? "es" : "en";
            changeLanguage(newLanguage);
        });

        changeLanguage(currentLanguage);
    }

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        const id = item.getAttribute("id");
        if (id && languages[currentLanguage][id]) {
            item.textContent = languages[currentLanguage][id];
        }
    });
});