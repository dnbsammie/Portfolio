import { useEffect, useRef, useState } from "react";

function Background() {
  const canvasRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
    };

    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animationFrameId;
    let isAnimating = true;

    const lineCount = 25;
    const waveAmplitude = 100;
    const waveFrequency = 0.005;
    const speed = 0.015;
    const step = 4;
    let offset = 0.1;

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    }

    const handleVisibilityChange = () => {
      isAnimating = document.visibilityState === "visible";
    };

    const getColors = (isDark) => {
      return isDark
        ? ["#ff9e70", "#ff8b52", "#fb854e"]
        : ["#ee7a44", "#e07039", "#d0623a"];
    };

    const createGradient = (colors) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      colors.forEach((color, i) => gradient.addColorStop(i / 2, color));
      return gradient;
    };

    function draw() {
      if (!isAnimating) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxSpacing = window.innerHeight * 0.05;
      const minSpacing = window.innerHeight * 0.025;
      const spacing = minSpacing + (maxSpacing - minSpacing) * (0.5 + 0.5 * Math.sin(offset));
      const centerY = canvas.height / 2;
      const colors = getColors(isDarkMode);
      ctx.strokeStyle = createGradient(colors);

      for (let i = 0; i < lineCount; i++) {
        const progress = i / (lineCount - 1);
        const baseY = centerY + (i - lineCount / 2) * spacing;
        const delay = i * 0.15;
        const waveHeight = Math.sin(offset - delay) * waveAmplitude;

        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += step) {
          const y = baseY + waveHeight * Math.sin(x * waveFrequency + offset);
          ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      offset += speed;
      animationFrameId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} id="waveCanvas" />;
}

export default Background;