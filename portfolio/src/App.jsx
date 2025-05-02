import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeSwitcher';
import { LanguageProvider } from './context/LanguageContext';
import Preloader from './components/Preloader';
import Background from './components/Background'
import HeaderMenu from './components/HeaderMenu';
import Home from './layouts/Home';
import About from './layouts/About';
import Projects from './layouts/Projects';
import Education from './layouts/Education';
import Contact from './layouts/Contact';
import "./styles/global.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <ThemeProvider>
        <Preloader onLoadComplete={handleLoadComplete} />
        <Background />
        <LanguageProvider>
          <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
            <HeaderMenu />
            <Home />
            <About />
            <Projects />
            <Education />
            <Contact />
          </main>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
