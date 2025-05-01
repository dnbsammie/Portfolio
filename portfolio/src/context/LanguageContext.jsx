import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import en from "./translations/en";
import es from "./translations/es";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const getPreferredLanguage = () =>
    localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en");

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getPreferredLanguage());
    const [isTransitioning, setIsTransitioning] = useState(false);

    const translations = useMemo(() => (language === "es" ? es : en), [language]);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = useCallback((lang) => {
        if (lang === language) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setLanguage(lang);
            localStorage.setItem("lang", lang);
            setIsTransitioning(false);
        }, 200);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    );
};
