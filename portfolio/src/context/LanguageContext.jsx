import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "./translations/en";
import es from "./translations/es";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const getInitialLanguage = () => {
    const storedLang = localStorage.getItem("lang");
    const pathLang = window.location.pathname.split("/")[2]?.toLowerCase();

    if (storedLang) return storedLang;
    if (pathLang === "es" || pathLang === "en") return pathLang;

    return navigator.language.startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage());
    const [translations, setTranslations] = useState(language === "es" ? es : en);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setTranslations(language === "es" ? es : en);
        document.documentElement.lang = language;

        const pathParts = window.location.pathname.split("/").filter(Boolean);
        const base = pathParts[0];
        const langInPath = pathParts[1];

        if (langInPath !== language) {
            const remainingPath = pathParts.slice(2).join("/");
            const newPath = `/${base}/${language}/${remainingPath}`;
            window.history.replaceState(null, "", newPath);
        }
    }, [language]);

    const toggleLanguage = useCallback((lang) => {
        if (lang !== language) {
            setIsTransitioning(true);
            setTimeout(() => {
                setLanguage(lang);
                localStorage.setItem("lang", lang);
                setIsTransitioning(false);
            }, 300);
        }
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{ language, translations, toggleLanguage, isTransitioning }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
