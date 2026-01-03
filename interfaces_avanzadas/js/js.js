function iniciarVoz() {

  if (!('webkitSpeechRecognition' in window)) {
    alert("Tu navegador no soporta comandos de voz");
    return;
  }

  // ===== UI DE VOZ =====
  const overlay = document.createElement("div");
  overlay.id = "voice-ui";
  overlay.innerHTML = `
    <div style="
      background:#111;
      padding:30px;
      border-radius:20px;
      text-align:center;
      color:white;
      min-width:280px;
      box-shadow:0 0 30px rgba(0,0,0,.6)
    ">
      <h3>🎤 Escuchando...</h3>
      <p id="voice-msg">Di un comando</p>
    </div>
  `;
  overlay.style = `
    position:fixed;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,.6);
    z-index:9999;
  `;
  document.body.appendChild(overlay);

  const msg = document.getElementById("voice-msg");

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "es-MX";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = (event) => {
    const comando = event.results[0][0].transcript.toLowerCase();
    console.log("Comando:", comando);

    msg.innerHTML = `✅ Comando reconocido:<br><strong>"${comando}"</strong>`;

    // ⏱️ esperar para que se vea el mensaje
    setTimeout(() => ejecutarComando(comando), 1200);
  };

  recognition.onerror = () => cerrarUI();
  recognition.onend = () => {};

  function ejecutarComando(comando) {

    if (
      comando.includes("inscripción") ||
      comando.includes("realizar inscripción")
    ) {
      window.location.href = "../inscripcion/inscripcion.html";

    } else if (
      comando.includes("oferta")
    ) {
      window.location.href = "../inicio/oferta.html";

    } else if (comando.includes("configuración")) {
      window.location.href = "../configuración/configuracion.html";

    } else if (
      comando.includes("mi pago") ||
      comando.includes("pagar")
    ) {
      window.open("https://www.uv.mx/mipago/", "_blank");
      cerrarUI();

    } else if (
      comando.includes("perfil")
    ) {
      window.location.href = "../perfiles/miperfil.html";

    } else if (comando.includes("modo oscuro")) {
      localStorage.setItem("darkMode", "on");
      document.body.classList.add("dark");
      msg.innerHTML = "🌙 Modo oscuro activado";
      setTimeout(cerrarUI, 1200);

    } else {
      msg.innerHTML = "❌ Comando no reconocido";
      setTimeout(cerrarUI, 1500);
    }
  }

  function cerrarUI() {
    const ui = document.getElementById("voice-ui");
    if (ui) ui.remove();
  }
}
