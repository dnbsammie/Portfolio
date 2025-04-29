import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "./translations/en";
import es from "./translations/es";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const getInitialLanguage = () => {
    const storedLang = localStorage.getItem("lang");
    const urlLang = window.location.pathname.replace("/", "").toLowerCase();

    if (storedLang) return storedLang;
    if (urlLang === "es" || urlLang === "en") return urlLang;

    return navigator.language.startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage());
    const [translations, setTranslations] = useState(language === "es" ? es : en);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setTranslations(language === "es" ? es : en);
        document.documentElement.lang = language;
        window.history.replaceState(null, "", `/${language}`);
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
        <LanguageContext.Provider value={{ language, translations, toggleLanguage, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    );
};