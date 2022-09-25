let escala1 = prompt('Ingrese escala1');
let duracion1 = prompt('Ingrese duracion');
let escala2 = prompt('Ingrese escala2');
let duracion2 = prompt('Ingrese duracion');
let escala3 = prompt('Ingrese escala3');
let duracion3 = prompt('Ingrese duracion');
let total = Number(duracion1) + Number(duracion2) + Number(duracion3);
alert(`
Escala1 ${escala1} duracion: ${duracion1}
Escala2 ${escala2} duracion:  ${duracion2}
Escala3 ${escala3} duracion:  ${duracion3}
Duracion total del vuelo: ${total}
`);