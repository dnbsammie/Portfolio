import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/components/videoModal.css";

const VideoModal = ({ videoUrl, onClose }) => {
    const { translations } = useLanguage();
    const t = translations.projects;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!videoUrl) {
            setHasError(true);
            setIsLoading(false);
        }
    }, [videoUrl]);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return createPortal(
        <div className="video-modal show" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="video-container">
                    {isLoading && (
                        <div className="video-loading">
                            <span className="loader"></span>
                            <p>{t.load}</p>
                        </div>
                    )}
                    {!hasError && (
                        <iframe
                            id="project-video"
                            src={videoUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={handleLoad}
                            onError={handleError}
                            title="Video Project"
                            style={{ display: isLoading ? 'none' : 'block' }}
                        ></iframe>
                    )}
                    {hasError && (
                        <div className="video-fallback">
                            <h2>{t.fal1}</h2>
                            <p>{t.fal2}</p>
                        </div>
                    )}
                </div>
                <a
                    href="#"
                    className="button fill-button close-modal"
                    onClick={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    {t.closeModal}
                </a>
            </div>
        </div>,
        document.body
    );
};

const VideoTrigger = ({ videoId, label = "VIDEO" }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "";
    };

    const videoUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

    return (
        <>
            <a
                href="#"
                className="button"
                onClick={openModal}
                aria-label="Video Modal Button"
            >
                {label}
            </a>
            {modalOpen && (
                <VideoModal
                    videoUrl={videoUrl}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export { VideoModal, VideoTrigger };
