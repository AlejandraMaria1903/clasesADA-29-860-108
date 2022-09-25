alert(`Orden de compra`)
let pricepizzas = 1100;
let priceemp = 150;
let pricehamb = 350;

let cantpizzas = prompt(`Ingrese la cantidad de pizzas, (la unidad está en ${pricepizzas})`);
let cantemp = prompt(`Ingrese la cantidad de empanadas, (la unidad está en ${priceemp})`);
let canthamb = prompt(`Ingrese la cantidad de hamburguesas, (la unidad está en ${pricehamb})`);

let total = (Number(cantpizzas) * pricepizzas) + (Number(cantemp) * priceemp) + (Number(canthamb) * pricehamb);
let cuotas = prompt(`El total de su compra sería ${total}, en cuántas cuotas desea pagar su compra?`);
alert(`Detalle de su compra: ${cantpizzas} pizzas: ${Number(cantpizzas) * pricepizzas};
                                    ${cantemp} empanadas: ${Number(cantemp) * priceemp};
                                    ${canthamb} gaseosas: ${Number(canthamb) * pricehamb}
                                    El total de su compra es: ${total} pesos
                                    Cantidad de cuotas es de: ${cuotas}, 
                                    El valor de cada cuota es: ${total/Number(cuotas)}`)