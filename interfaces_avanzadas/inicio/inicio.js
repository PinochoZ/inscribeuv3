// ================= inicio.js =================
document.addEventListener("DOMContentLoaded", () => {

  // ===== MODO OSCURO =====
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark');
  }

  // ===== MODO VOZ =====
  if (localStorage.getItem('voiceMode') === 'off') {
    const mic = document.querySelector('.icon.mic');
    if (mic) mic.style.display = 'none';
  }

  // ===== TAMAÑO DE LETRA =====
  const size = localStorage.getItem('fontSize');
  if (size) {
    document.body.style.fontSize = size + 'px';
  }

});






