import { useEffect, useRef } from "react";
import "../styles/global.css";

function Background() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(true);
  const offsetRef = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const lineCount = 28;
    const waveAmplitude = 100;
    const waveFrequency = 0.005;
    const speed = 0.015;
    const step = 5;

    const getColors = (darkMode) =>
      darkMode
        ? ["#d06e3a", "#f78448", "#ffa766"]
        : ["#1e1e1e", "#141414", "#282828"];

    const createGradient = (colors, height) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      colors.forEach((color, i) => gradient.addColorStop(i / 2, color));
      return gradient;
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const handleVisibilityChange = () => {
      isAnimatingRef.current = document.visibilityState === "visible";
    };

    const draw = () => {
      if (!isAnimatingRef.current) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const spacing =
        height * 0.025 +
        (height * 0.05 - height * 0.025) *
        (0.5 + 0.5 * Math.sin(offsetRef.current));
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      ctx.strokeStyle = createGradient(getColors(isDark), height);

      for (let i = 0; i < lineCount; i++) {
        const progress = i / (lineCount - 1);
        const baseY = centerY + (i - lineCount / 2) * spacing;
        const delay = i * 0.15;
        const waveHeight =
          Math.sin(offsetRef.current - delay) *
          waveAmplitude *
          (1 - Math.abs(progress - 0.5));

        ctx.beginPath();
        for (let x = 0; x <= width; x += step) {
          const y =
            baseY +
            waveHeight * Math.sin(x * waveFrequency + offsetRef.current);
          ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      offsetRef.current += speed;
      animationRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} id="waveCanvas" />;
}

export default Background;