import "../styles/contact.css";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
    const textTop = "GET IN";
    const textBottom = "TOUCH";

    const { translations, isTransitioning } = useLanguage();
    const t = translations.contact;


    return (
        <section className="contact" id="contact" aria-labelledby="contact-section">
            <div className="container">
                <div className="animated-text">
                    <div className="text-row">
                        {textTop.split("").map((letter, index) => (
                            <span key={index} className={`letter ${index === 1 || index === 4 ? "wide" : ""}`}>
                                {letter}
                            </span>
                        ))}
                    </div>

                    <div className="text-row">
                        {textBottom.split("").map((letter, index) => (
                            <span key={index} className={`letter ${index === 0 || index === 2 || index === 4 ? "wide" : ""}`}>
                                {letter}
                            </span>
                        ))}
                    </div>
                </div>
                <footer aria-labelledby="footer">
                    <div className="f-cont">
                        <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.p1}</h4>
                        <h6>{t.p2}</h6>
                        <a href="mailto:seriveramosq@gmail.com" className="email" aria-label="email">seriveramosq@gmail.com</a>
                    </div>
                    <div className="f-cont">
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin" ></a>
                            <a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a>
                            <a href="https://www.instagram.com/dnbsammie" className="fa-brands fa-instagram" target="_blank" aria-label="instagram"></a>
                            <a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a>
                        </div>
                        <p className={`copyright text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="copyright">{t.copyright}</p>
                    </div>
                </footer>
            </div>
        </section>
    );
};
export default Contact;
