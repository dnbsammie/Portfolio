import { useState, useEffect } from 'react';
import '../styles/components/preloader.css';

const Preloader = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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

        const startLoading = async () => {
            await checkAssetsLoaded();

            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsLoading(false);
                        document.querySelector('.preloader').addEventListener('transitionend', () => {
                            onLoadComplete();
                        });

                        return 100;
                    }
                    return prev + 1;
                });
            }, 30);
        };

        startLoading();

        return () => {
        };
    }, [onLoadComplete]);

    return (
        <div className={`preloader ${!isLoading ? 'loaded' : ''}`}>
            <span className={`counter ${progress >= 100 ? 'complete' : ''}`}>
                {progress}%
            </span>
        </div>
    );
};

export default Preloader;
