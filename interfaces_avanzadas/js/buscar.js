document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");

  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ejecutarBusqueda(input.value.toLowerCase().trim());
    }
  });
});

function ejecutarBusqueda(texto) {
  if (!texto) return;

  // 🔎 INSCRIPCIÓN
  if (
    texto.includes("inscripcion") ||
    texto.includes("inscripción") ||
    texto.includes("realizar inscripcion")
  ) {
    window.location.href = "../inscripcion/inscripcion.html";
  }

  // 📘 OFERTA EDUCATIVA
  else if (
    texto.includes("oferta") ||
    texto.includes("oferta educativa")
  ) {
    window.location.href = "../inicio/oferta.html";
  }

  // ⚙ CONFIGURACIÓN
  else if (texto.includes("configuracion") || texto.includes("configuración")) {
    window.location.href = "../configuración/configuracion.html";
  }

  // 🌙 MODO OSCURO
  else if (texto.includes("modo oscuro")) {
    localStorage.setItem("darkMode", "on");
    document.body.classList.add("dark");
    alert("🌙 Modo oscuro activado");
  }

  // 🎤 VOZ
  else if (
    texto.includes("voz") ||
    texto.includes("modo de voz")
  ) {
    localStorage.setItem("voiceMode", "on");
    alert("🎤 Modo de voz activado");
  }

  // 👤 PERFIL
  else if (
    texto.includes("perfil") ||
    texto.includes("mi perfil")
  ) {
    window.location.href = "../perfiles/miperfil.html";
  }

  // ❓ AYUDA
  else if (texto.includes("ayuda")) {
    window.location.href = "../ayuda/ayuda.html";
  }

  // ❌ NO RECONOCIDO
  else {
    alert("❌ No se encontró ninguna sección");
  }
}
