'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const colourButton = document.getElementById('color-switch');
const palettes = [
  ['#2447e8', '#edf0ff', '#e5f580'],
  ['#6638ac', '#f0eafb', '#f2dd85'],
  ['#166451', '#e7f2ed', '#e5f580'],
];
let paletteIndex = 0;
colourButton.hidden = false;
colourButton.addEventListener('click', () => {
  paletteIndex = (paletteIndex + 1) % palettes.length;
  const [accent, tint, lime] = palettes[paletteIndex];
  const style = document.documentElement.style;
  style.setProperty('--accent', accent);
  style.setProperty('--tint', tint);
  style.setProperty('--lime', lime);
  document.querySelector('meta[name="theme-color"]').content = accent;
});
