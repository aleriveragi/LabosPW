function mostrarActividad() {
  const dia = document.getElementById("diaInput").value.trim().toLowerCase();
  let actividad;

  switch (dia) {
    case "lunes":
      actividad = "Hoy es Lunes  Debo atender un cliente específico.";
      break;
    case "martes":
      actividad = "Hoy es Martes  Visito una agencia fuera de la ciudad.";
      break;
    case "miércoles":
    case "miercoles":
      actividad = "Hoy es Miércoles  Debo llevar a mi hija al ballet.";
      break;
    case "jueves":
      actividad = "Hoy es Jueves  Debo priorizar entregas de desarrollo.";
      break;
    case "viernes":
      actividad = "Hoy es Viernes  Debo atender problemas de manera remota.";
      break;
    case "sábado":
    case "sabado":
      actividad = "Hoy es Sábado  Debo hacer lo que mi esposa quiera.";
      break;
    case "domingo":
      actividad = "Hoy es Domingo  Día libre, disfruta tu descanso 😎.";
      break;
    default:
      actividad = " No hay actividades registradas para este día.";
  }

  document.getElementById("resultado").innerText = actividad;
}
