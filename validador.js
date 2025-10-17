// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnValidar");

  boton.addEventListener("click", function () {
    const cedula = document.getElementById("cedula").value.trim();
    const resultado = document.getElementById("resultado");

    if (!/^\d{11}$/.test(cedula)) {
      resultado.textContent = "❌ CÉDULA INCORRECTA: Debe contener exactamente 11 dígitos.";
      resultado.style.color = "red";
      return;
    }

    const digitos = cedula.split("").map(Number);
    let suma = 0;

    for (let i = 0; i < 10; i++) {
      const multiplicador = (i % 2 === 0) ? 1 : 2;
      let producto = digitos[i] * multiplicador;

      if (producto > 9) {
        producto = Math.floor(producto / 10) + (producto % 10);
      }

      suma += producto;
    }

    const verificadorEsperado = (10 - (suma % 10)) % 10;
    const verificadorReal = digitos[10];

    if (verificadorEsperado === verificadorReal) {
      resultado.textContent = "✅ CÉDULA ES CORRECTA (estructura válida)";
      resultado.style.color = "green";
    } else {
      resultado.textContent = `❌ CÉDULA INCORRECTA: Se esperaba ${verificadorEsperado}, pero se encontró ${verificadorReal}`;
      resultado.style.color = "red";
    }
  });
});
