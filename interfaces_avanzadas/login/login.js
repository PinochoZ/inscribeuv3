document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const matricula = document.getElementById("matricula").value.trim();
  const password = document.getElementById("password").value.trim();

  // Credenciales válidas
  const MATRICULA_VALIDA = "zs22016064";
  const PASSWORD_VALIDO = "PIZA030111";

  if (!matricula || !password) {
    alert("Completa todos los campos");
    return;
  }

  if (matricula === MATRICULA_VALIDA && password === PASSWORD_VALIDO) {
    // Guardar sesión
    localStorage.setItem("usuario", matricula);

    // Redirigir
    window.location.href = "../inicio/inicio.html";
  } else {
    alert("❌ Matrícula o contraseña incorrecta");
  }
});

