// Background Wave Animation
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const lineCount = 28;
const waveAmplitude = 100;
const waveFrequency = 0.005;
const speed = 0.02;
let offset = 0;
const maxSpacing = window.innerHeight * 0.04;
const minSpacing = window.innerHeight * 0.05;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const spacing =
      minSpacing +
      (maxSpacing - minSpacing) * (0.5 + 0.5 * Math.sin(offset));

  for (let i = 0; i < lineCount; i++) {
      const progress = i / (lineCount - 1);
      const centerY = canvas.height / 2;

      const baseY = centerY + (i - lineCount / 2) * spacing;

      const delay = i * 0.15;
      const waveHeight = Math.sin(offset - delay) * waveAmplitude;

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x++) {
          const y = baseY + waveHeight * Math.sin(x * waveFrequency + offset);
          if (x === 0) {
              ctx.moveTo(x, y);
          } else {
              ctx.lineTo(x, y);
          }
      }

      const gradient = ctx.createLinearGradient(0, baseY, canvas.width, baseY);
      gradient.addColorStop(0, '#d94018');
      gradient.addColorStop(0.5, '#ff5a1f');
      gradient.addColorStop(1, '#501300');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
  }

  offset += speed;
  requestAnimationFrame(draw);
}

draw();
// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.getElementById("mode");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark-mode");
    }

    modeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        if (event.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
});
