import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { VideoTrigger } from "../components/VideoModal";
import project1 from "../assets/images/project-1.webp";
import project2 from "../assets/images/project-2.webp";
import project3 from "../assets/images/project-3.webp";
import project4 from "../assets/images/project-4.webp";
import "../styles/projects.css";


const Projects = () => {
    const { translations, isTransitioning } = useLanguage();
    const t = translations.projects;

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".sticky").forEach(section => {
                const offsetTop = section.parentElement.offsetTop;
                const scrollSection = section.querySelector(".scroll_section");
                let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
                percentage = Math.min(Math.max(percentage, 0), 300);
                scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="projects" id="projects" aria-labelledby="projects-section">
            <div className="sticky">
                <div className="scroll_section">
                    {/* JAVA */}
                    <div className="project">
                        <img src={project1} itemType="image" alt="Image 1" loading="lazy" />
                        <div className="project_content">
                            <div className="project-top">
                                <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pn1}</h4>
                                <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.ps1}</h6>
                                <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pd1}</p>
                            </div>
                            <div className="topics">
                                <div className="topic">JAVA</div>
                                <div className="topic">CSS</div>
                                <div className="topic">JAVAFX</div>
                                <div className="topic">MAVEN</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dnbsammie/Ordo" className="p-button" aria-label="Repository Link" target="_blank">GITHUB</a>
                                <VideoTrigger videoId="" />
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project2} itemType="image" alt="Image 2" loading="lazy" />
                        <div className="project_content">
                            <div className="project-top">
                                <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pn2}</h4>
                                <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.ps2}</h6>
                                <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pd2}</p>
                            </div>
                            <div className="topics">
                                <div className="topic">JAVA</div>
                                <div className="topic">CSS</div>
                                <div className="topic">JAVAFX</div>
                                <div className="topic">GRADLE</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dnbsammie/Aural" className="p-button" aria-label="Repository Link" target="_blank">GITHUB</a>
                                <VideoTrigger videoId="" />
                            </div>
                        </div>
                    </div>
                    {/* C++ */}
                    <div className="project">
                        <img src={project3} itemType="image" alt="Image 3" loading="lazy" />
                        <div className="project_content">
                            <div className="project-top">
                                <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pn3}</h4>
                                <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.ps3}</h6>
                                <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pd3}</p>
                            </div>
                            <div className="topics">
                                <div className="topic">C++</div>
                                <div className="topic">JUCE</div>
                                <div className="topic">FL STUDIO</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dnbsammie/SoundMorph" className="p-button" aria-label="Repository Link" target="_blank">GITHUB</a>
                                <VideoTrigger videoId="" />
                            </div>
                        </div>
                    </div>
                    {/* C#*/}
                    <div className="project">
                        <img src={project4} itemType="image" alt="Image 4" loading="lazy" />
                        <div className="project_content">
                            <div className="project-top">
                                <h4 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pn4}</h4>
                                <h6 className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.ps4}</h6>
                                <p className={`text-transition ${isTransitioning ? "fade-out" : "fade-in"}`}>{t.pd4}</p>
                            </div>
                            <div className="topics">
                                <div className="topic">C#</div>
                                <div className="topic">UNITY</div>
                                <div className="topic">GIT</div>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dnbsammie/Overdrive" className="p-button" aria-label="Repository Link" target="_blank">GITHUB</a>
                                <VideoTrigger videoId="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
