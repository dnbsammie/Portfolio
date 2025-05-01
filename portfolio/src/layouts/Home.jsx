import { useLanguage } from "../context/LanguageContext";
import "../styles/home.css";

const Home = () => {
    const { translations, isTransitioning, language } = useLanguage();
    const t = translations.home;
    const base = import.meta.env.BASE_URL || "/";
    const cvFile = language === "es" ? `${base}documents/srcv-es.pdf` : `${base}documents/srcv-en.pdf`;
    const cvDownloadName = language === "es" ? "srcv-es.pdf" : "srcv-en.pdf";

    return (
        <section className="home" id="home" aria-labelledby="home-section">
            <div className="container">
                <div className="hero">
                    <div className="hero-box">
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="charge">
                            {t.charge}
                        </h5>
                        <h1 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="name">SAMUEL</h1>
                        <h1 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="lastname">RIVERA</h1>
                        <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>
                            {t.subtitle}
                        </h6>
                    </div>
                    <div className="cta">
                        <a
                            href={cvFile}
                            className={`button line-button text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}
                            download={cvDownloadName}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download CV"
                        >
                            {t.download_cv}
                        </a>
                        <a
                            href="#about"
                            className={`button fill-button text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}
                            aria-label="Explore Button">
                            {t.explore}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
