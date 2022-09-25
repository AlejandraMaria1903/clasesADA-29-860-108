function calcularPuntaje(facil, normal, dificil) {
    return 3 * facil + 5 * normal + 10 * dificil;
}

console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));