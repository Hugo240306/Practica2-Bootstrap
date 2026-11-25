// ==========================================================
// Nodo Norte · js/validacion.js
// Validación de formularios con Bootstrap y pequeños extras:
// año del footer, filtros de eventos y cuenta atrás.
// No envía datos a ningún servidor: es una práctica de maquetación.
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  // ---------- 1. Año actual en el footer ----------
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // ---------- 2. Validación de formularios (patrón oficial de Bootstrap) ----------
  // Cada formulario con .needs-validation lleva "novalidate" en el HTML para que
  // el navegador no muestre sus avisos y Bootstrap pinte los suyos (.was-validated).
  document.querySelectorAll("form.needs-validation").forEach((form) => {

    // Comprobación extra en el alta de socio: la fecha de nacimiento debe dar 16 años o más
    const nacimiento = form.querySelector("#s-nacimiento");
    if (nacimiento) {
      nacimiento.addEventListener("input", () => {
        const fecha = new Date(nacimiento.value);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fecha.getFullYear();
        const aunNoCumple = hoy < new Date(hoy.getFullYear(), fecha.getMonth(), fecha.getDate());
        if (aunNoCumple) edad--;
        // setCustomValidity con texto marca el campo como inválido; vacío lo deja válido
        nacimiento.setCustomValidity(edad >= 16 ? "" : "Mínimo 16 años");
      });
    }

    form.addEventListener("submit", (evento) => {
      evento.preventDefault(); // no se recarga la página

      // Si hay algún campo inválido: se muestran los mensajes y se lleva el foco al primero
      if (!form.checkValidity()) {
        evento.stopPropagation();
        form.classList.add("was-validated");
        const primero = form.querySelector(":invalid");
        if (primero) primero.focus();
        return;
      }

      // Formulario correcto: se limpia y se muestra el mensaje de confirmación
      form.classList.remove("was-validated");
      form.reset();
      const ok = form.querySelector(".aviso-ok");
      if (ok) ok.hidden = false;
    });
  });

  // ---------- 3. Filtros de eventos (solo en eventos.html) ----------
  // Cada botón .filtro tiene data-filtro; cada card tiene data-tipo y data-nivel.
  const filtros = document.querySelectorAll(".filtro");
  const tarjetas = document.querySelectorAll("[data-tipo]");
  const sinResultados = document.getElementById("sin-resultados");

  filtros.forEach((boton) => {
    boton.addEventListener("click", () => {
      // aria-pressed indica a los lectores de pantalla qué filtro está activo
      filtros.forEach((b) => b.setAttribute("aria-pressed", "false"));
      boton.setAttribute("aria-pressed", "true");

      const filtro = boton.dataset.filtro;
      let visibles = 0;
      tarjetas.forEach((tarjeta) => {
        const coincide = filtro === "todos" || tarjeta.dataset.tipo === filtro || tarjeta.dataset.nivel === filtro;
        tarjeta.hidden = !coincide;
        if (coincide) visibles++;
      });
      if (sinResultados) sinResultados.hidden = visibles > 0;
    });
  });

  // ---------- 4. Cuenta atrás hasta el próximo evento (solo en index.html) ----------
  const cuenta = document.getElementById("cuenta");
  if (cuenta) {
    const destino = new Date(cuenta.dataset.fecha).getTime();
    const pintar = () => {
      let resto = Math.max(0, destino - Date.now()); // milisegundos que faltan
      const dias = Math.floor(resto / 86400000);
      resto %= 86400000;
      const horas = Math.floor(resto / 3600000);
      resto %= 3600000;
      const minutos = Math.floor(resto / 60000);
      cuenta.querySelector("[data-d]").textContent = dias;
      cuenta.querySelector("[data-h]").textContent = horas;
      cuenta.querySelector("[data-m]").textContent = minutos;
    };
    pintar();
    setInterval(pintar, 30000); // se actualiza cada 30 segundos
  }
});
