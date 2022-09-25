function restarPorcentaje(numero, porcentaje) {
    return numero - (numero * porcentaje / 100)
}

console.log(restarPorcentaje(100, 15))
console.log(restarPorcentaje(10, 40))
console.log(restarPorcentaje(200, 10))