import React from "react";
import { useLanguage } from "../context/LanguageContext";
import RadialChart from "../components/RadialChart";
import "../styles/about.css";

const About = () => {
    const { translations, isTransitioning } = useLanguage();
    const t = translations.about;

    return (
        <section className="about" id="about" aria-labelledby="about-section">
            <div className="container">
                <div className="about-top" aria-labelledby="about-top">
                    <h3 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.title}</h3>
                    <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.subtitle}</h5>
                    <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.description}</h6>
                </div>
                <div className="about-bot">
                    <div className="bento-container">
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.radial}</h5>
                        <RadialChart />
                        <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>
                            <a href="https://maven.apache.org/" target="_blank">MAVEN</a> | <a href="https://gradle.org/" target="_blank">GRADLE</a> | <a href="https://kotlinfoundation.org/" target="_blank">KOTLIN</a> | <a href="https://react.dev/" target="_blank">REACT</a> | <a href="https://juce.com/" target="_blank">JUCE</a></p>
                    </div>
                    <div className="bento-container">
                        <h5 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.experience}</h5>
                        <article className="time-item">
                            <hr />
                            <div className="time-top">
                                <div className="time-date">
                                    <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="">2024 - 2025</p>
                                </div>
                                <div className="time-info">
                                    <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.role1}</h6>
                                    <a href="" className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} target="_blank">Arte & Marqueteria.</a>
                                </div>
                            </div>
                            <div className="time-bot">
                                <ul className="responsabilities">
                                    <li className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="function">{t.func1}</li>
                                    <li className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="objective">{t.objc1}</li>
                                    <li className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`} aria-label="archivement">{t.arch1}</li>
                                </ul>
                            </div>
                            <div className="topics">
                                <div className="topic">HTML</div>
                                <div className="topic">CSS</div>
                                <div className="topic">JAVASCRIPT</div>
                                <div className="topic">REACT</div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;