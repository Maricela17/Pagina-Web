// Desplazamiento 
document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll("nav a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      evento.preventDefault();
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  
});
