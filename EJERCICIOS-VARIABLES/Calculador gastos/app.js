let disponible = prompt('Ingrese el dinero disponible');
let primero = (3-1);
let servicio1 = prompt('Ingrese el nombre de servicio');
alert(`Faltan ingresar ${primero} servicios`);
let primermonto= prompt('Ingrese el importe a pagar');
let primerresto =(Number(disponible) - Number(primermonto));
alert (`Quedan disponibles ${primerresto} pesos.`)
let segundo = (3-2);
let servicio2 = prompt('Ingrese el nombre de servicio');
alert(`Faltan ingresar ${segundo} servicios`);
let segmonto = prompt('Ingrese el importe a pagar');
let segresto = (Number(disponible) - Number(segmonto));                              9;
alert(`Quedan disponibles ${segresto} pesos`);
let tercero = (3-3);
let servicio3 = prompt('Ingrese el nombre de servicio');
alert(`Faltan ingresar ${tercero} servicios`);
let tercermonto = prompt('Ingrese el importe a pagar');
let tercerresto = (Number(disponible) - Number(tercermonto));
alert(`Quedan disponibles ${tercerresto} pesos`);
alert(` Servicios a pagar              Monto a pagar           Disponible
          ${servicio1}                            ${primermonto}                       ${primerresto}
          ${servicio2}                             ${segmonto}                       ${segresto}
          ${servicio3}                            ${tercermonto}                     ${tercerresto}`)