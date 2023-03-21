//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaDeMultiplicar(n) {
  document.write("<h2> Tabla de Multiplicar del " + n + "</h2>");
  document.write("<ul>");
  for (i = 1; i <= 10; i++) {
    document.write("<li>");
    document.write(n + "x" + i + "=" + n * i);
    document.write("</li>");
  }
  document.write("</ul>");
}

tablaDeMultiplicar(8);
