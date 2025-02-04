<!-- HEADER -->
<h1 align="center">SAMUEL RIVERA PORTFOLIO</h1>
<!-- <img align="center" src="./"></img> -->
<p align="center"> A minimalistic portfolio website</p>

<p align="center">
  <a href="https://github.com/dnbsammie/MyPortfolio/issues">
    <img src="https://img.shields.io/github/issues/dnbsammie/Portfolio" alt="Issues">
  </a>
  <a href="https://github.com/dnbsammie/MyPortfolio/stargazers">
    <img src="https://img.shields.io/github/stars/dnbsammie/Portfolio" alt="Stars">
  </a>
</p>
<h3 align="center">Languages and Tools 🛠</h3>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,github,vscode&theme=dark" />
  </a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#elements">Elements</a></li>
    <!-- <li><a href="#gallery">Gallery</a></li> -->
    <li><a href="#code">Code</a></li>
  </ol>
</details>

---

<!-- ELEMENTS -->
<h3 id="elements">Elements</h3>
<h2>Check Some Items Used:</h2>
<ul>
    <li><a href="https://colorswall.com/palette/511287">Palette 1: Progressive Black Shades</a></li>
    <li><a href="https://colorswall.com/palette/511286">Palette 2: Progressive Dark Shades</a></li>
    <li><a href="https://colorswall.com/palette/511285">Palette 3: Progressive Grey Shades</a></li>
    <li><a href="https://colorswall.com/palette/511284">Palette 4: Progressive White Shades</a></li>
    <li><a href="https://colorswall.com/palette/513313">Palette 5: Ember Circuit</a></li>
</ul>

<!-- GALLERY -->
<!-- <h3 id="gallery">Gallery</h3>
<h2>Some highlights of the website</h2>
<p align="center">
  <img src="" alt="Image 1" width="30%">
  <img src="" alt="Image 2" width="30%">
  <img src="" alt="Image 3" width="30%">
</p>

<p align="center">
  <img src="" alt="Image 4" width="45%">
  <img src="" alt="Image 5" width="45%">
</p>

<p align="center">
  <strong>Fig. 1:</strong> Example images from the project.
</p> -->

<!-- CODE -->
<h3 id="code">Code</h3>
<h2>Animations and transitions in JS:</h2>

<h3>Wave Background</h3>
<pre>
<code>
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
</code>
</pre>

---
<p>&copy; 2025 Samuel Rivera. All rights reserved.</p>