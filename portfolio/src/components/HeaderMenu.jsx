import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from '../context/ThemeSwitcher';
import "../styles/components/headerMenu.css";

const HeaderMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleTheme } = useTheme();
    const [currentSection, setCurrentSection] = useState("home");
    const [logoText, setLogoText] = useState("samuel");
    const { changeLanguage, translations, isTransitioning, language } = useLanguage();
    const t = translations.header;

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let newSection = "home";

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    newSection = section.getAttribute("id");
                }
            });

            setCurrentSection(newSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-active", menuOpen);
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    const closeMenu = () => { setMenuOpen(false); };

    return (
        <>
            <header className="header">
                <div className="sb logo">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
                        className="logo-link" onMouseOver={() => setLogoText("refresh")}
                        onMouseOut={() => setLogoText("samuel")} aria-current="page">{logoText}</a>
                </div>
                <div className="sb section-name">
                    <a className="toggle" onClick={toggleMenu}>{menuOpen ? "index" : currentSection}</a>
                </div>
                <div className="bottom-links">
                    <div className="box">
                        <div className="sb half">
                            <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" aria-label="linkedin" target="_blank"></a>
                        </div>
                        <div className="sb half">
                            <a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email" target="_blank"></a>
                        </div>
                    </div>
                    <div className="sb theme">
                        <a className="mode" onClick={toggleTheme} aria-label="Change Theme" role="switch">&#9680;</a>
                    </div>
                    <div className="box">
                        <div className="sb half">
                            <a className={`language ${language === "en" ? "active" : ""}`} onClick={() => changeLanguage("en")}>EN</a>
                        </div>
                        <div className="sb half">
                            <a className={`language ${language === "es" ? "active" : ""}`} onClick={() => changeLanguage("es")}>ES</a>
                        </div>
                    </div>
                </div>
            </header>

            <menu className={`menu ${menuOpen ? "open" : ""}`}>
                <div className="top-nav">
                    <h5>samuel-rivera</h5>
                </div>
                <nav className="nav">
                    <a href="#home" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} onClick={closeMenu}>{t.nav1}</a>
                    <a href="#about" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} onClick={closeMenu}>{t.nav2}</a>
                    <a href="#projects" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} onClick={closeMenu}>{t.nav3}</a>
                    <a href="#education" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} onClick={closeMenu}>{t.nav4}</a>
                    <a href="#contact" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} onClick={closeMenu}>{t.nav5}</a>
                </nav>
                <div className="bot-nav">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin"></a>
                        <a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email"></a>
                        <a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a>
                        <a href="https://www.instagram.com/dnbsammie" className="fa-brands fa-instagram" target="_blank" aria-label="instagram"></a>
                        <a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a>
                        {/* <a href="#" className="fa-brands fa-spotify" target="_blank" aria-label="spotify"></a>
                        <a href="#" className="fa-brands fa-soundcloud" target="_blank" aria-label="soundcloud"></a> */}
                    </div>
                </div>
            </menu>
        </>
    );
};

export default HeaderMenu;