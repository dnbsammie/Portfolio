import { useEffect, useState } from 'react';
import '../styles/components/preloader.css';

const Preloader = ({ onLoadComplete }) => {
    const [startExit, setStartExit] = useState(false);
    const loadingText = 'SAMUEL RIVERA';

    useEffect(() => {
        window.scrollTo(0, 0);

        const checkAssetsLoaded = () => {
            return new Promise((resolve) => {
                if (document.readyState === 'complete') {
                    resolve();
                } else {
                    window.addEventListener('load', resolve, { once: true });
                }
            });
        };

        const animateLoading = async () => {
            await checkAssetsLoaded();

            setTimeout(() => {
                setStartExit(true);
            }, 2800);
        };

        animateLoading();
    }, []);

    useEffect(() => {
        if (startExit) {
            const el = document.querySelector('.preloader');
            el.addEventListener('transitionend', () => {
                onLoadComplete();
            }, { once: true });
        }
    }, [startExit, onLoadComplete]);

    return (
        <div className={`preloader ${startExit ? 'loaded' : ''}`}>
            <div className="loading-text">
                {loadingText.split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Preloader;