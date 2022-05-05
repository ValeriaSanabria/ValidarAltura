rotulo.innerHTML = "Indique la altura de la persona:";

let alturaPermitida: number = 1.3;
let alturaPersona: number = 1.8;

if (alturaPersona <= alturaPermitida) {
  console.log("La persona no puede subir al juego");
} else {
  console.log("La persona puede subir al juego");
}
