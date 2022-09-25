let segundos = prompt('Ingrese los segundos');
let minutos = Math.floor(segundos / 60);
let restominutos= segundos % 60;
let horas = Math.floor(minutos / 60) ;
alert(`Los ${segundos} segundos son: ${horas} horas ${minutos} minutos y ${restominutos} segundos `)