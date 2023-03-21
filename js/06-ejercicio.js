// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:

// Input:
// lado A = 24
// lado B = 5

// Output: 58

let lado1 = (lado2 = 0);
let perimetro = 0;

lado1 = solicitarDato();
lado2 = solicitarDato();

escribirPerimetro(lado1, lado2);

function solicitarDato() {
  return parseInt(prompt("Ingresa un valor por favor"));
}

function escribirPerimetro(a, b) {
  let perimetro = 2 * (a + b);
  document.write(
    "el perimetro de un rectángulo " + a + " y " + b + " es " + perimetro
  );
}
