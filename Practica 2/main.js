// Nodo Norte · interactividad mínima (Sprint 1)
// El Sprint 1 solo exige navbar y footer; esto añade pequeños extras sin dependencias.

document.addEventListener("DOMContentLoaded", () => {
  // Año actual en el footer
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Filtros de eventos (solo en eventos.html)
  const filtros = document.querySelectorAll(".filtro");
  const tarjetas = document.querySelectorAll("[data-tipo]");
  filtros.forEach((btn) => {
    btn.addEventListener("click", () => {
      filtros.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const f = btn.dataset.filtro;
      tarjetas.forEach((t) => {
        const visible = f === "todos" || t.dataset.tipo === f || t.dataset.nivel === f;
        t.hidden = !visible;
      });
    });
  });

  // Validación Bootstrap + mensaje de confirmación (sin enviar datos)
  document.querySelectorAll("form.needs-validation").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
        return;
      }
      form.classList.remove("was-validated");
      const ok = form.querySelector(".aviso-ok");
      if (ok) ok.hidden = false;
      form.reset();
    });
  });

  // Cuenta atrás hasta el próximo evento
  const cuenta = document.getElementById("cuenta");
  if (cuenta) {
    const destino = new Date(cuenta.dataset.fecha).getTime();
    const pintar = () => {
      let d = Math.max(0, destino - Date.now());
      const dias = Math.floor(d / 86400000); d %= 86400000;
      const horas = Math.floor(d / 3600000); d %= 3600000;
      const min = Math.floor(d / 60000);
      cuenta.querySelector("[data-d]").textContent = dias;
      cuenta.querySelector("[data-h]").textContent = horas;
      cuenta.querySelector("[data-m]").textContent = min;
    };
    pintar();
    setInterval(pintar, 30000);
  }
});
