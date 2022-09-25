function gritar(str) {
  return str = '¡' + str + '!'
}

function obtenerNombreCompleto(nombre, apellido) {
  return nombre + ' ' + apellido;
}

function saludar(nombre) {
     return ('Hola ' + nombre + ', un gusto conocerte');
}

function saludarGritando (nombre, apellido) {
const nombreCompleto = obtenerNombreCompleto = (nombre, apellido);
const saludo = saludar(nombreCompleto);
const grito = gritar(saludo);
console.log(grito);
}

saludarGritando('Ada', 'Lovelace');