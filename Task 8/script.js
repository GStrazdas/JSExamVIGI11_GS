/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = (number1, number2) => number1 + number2;
    this.subtraction = (number1, number2) => number1 - number2;
    this.multiplication = (number1, number2) => number1 * number2;
    this.division = (number1, number2) => number1 / number2;
}

const calculator1 = new Calculator();

console.log(calculator1.sum(4, 5));
console.log(calculator1.subtraction(9, 3));
console.log(calculator1.multiplication(8, 2));
console.log(calculator1.division(24, 6));
