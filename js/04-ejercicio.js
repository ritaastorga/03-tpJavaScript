// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numero = prompt("Introducí un número entero por favor");
let resultado = parOimpar(numero);

function parOimpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write("El número " + numero + " es " + resultado);
