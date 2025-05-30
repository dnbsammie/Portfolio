import "../styles/education.css";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
    const { translations, isTransitioning } = useLanguage();
    const t = translations.education;

    return (
        <section className="education" id="education" aria-labelledby="education-section">
            <div className="container">
                <div className="left">
                    <div className="bento-container">
                        <h3 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="title">{t.block1}</h3>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>2024 - ACT</p>
                                </div>
                                <div className="time-info">
                                    <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><strong>{t.degree3}</strong></h4>
                                    <a href="https://www.devseniorcode.com/" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">Dev Senior S.A.S.</a>
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.type3}</p>
                                </div>
                            </div>
                        </article>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>2023 - ACT</p>
                                </div>
                                <div className="time-info">
                                    <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><strong>{t.degree2}</strong></h4>
                                    <a href="https://www.ibero.edu.co/" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">C. Universitaria Iberoamericana.</a>
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.type2}</p>
                                </div>
                            </div>
                        </article>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>2022 - 2023</p>
                                </div>
                                <div className="time-info">
                                    <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><strong>{t.degree1}</strong></h4>
                                    <a href="https://www.sena.edu.co/" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">Servicio Nacional de Aprendizaje.</a>
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.type1}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="right">
                    <div className="bento-container">
                        <h3 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="title">{t.block2}</h3>
                        <hr />
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><i className="fa-solid fa-palette"></i> {t.skill1}</h5>
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><i className="fa-solid fa-lightbulb"></i> {t.skill2}</h5>
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><i className="fa-solid fa-laptop-code"></i> {t.skill3}</h5>
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><i className="fa-solid fa-magnifying-glass"></i> {t.skill4}</h5>
                    </div>
                    <div className="bento-container">
                        <h3 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="title">{t.block3}</h3>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="date">2025</p>
                                </div>
                                <div className="time-info">
                                    <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><strong>{t.badge2}</strong></h4>
                                    <a href="https://politecnicodecolombia.edu.co/" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">Politénico de Colombia.</a>
                                </div>
                            </div>
                        </article>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="date">2022 </p>
                                </div>
                                <div className="time-info">
                                    <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}><strong>{t.badge1}</strong></h4>
                                    <a href="https://www.sena.edu.co/" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">Servicio Nacional de Aprendizaje.</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Education;
