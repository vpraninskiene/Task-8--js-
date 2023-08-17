/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2 
    }

    sum = () => {
        const firstNum = parseFloat(this.num1);
        const secondNum = parseFloat(this.num2);
        return firstNum + secondNum;

    }
    subtraction = () => {
        const firstNum = parseFloat(this.num1);
        const secondNum = parseFloat(this.num2);
        return firstNum - secondNum;

    }
    multiplication = () => {
        const firstNum = parseFloat(this.num1);
        const secondNum = parseFloat(this.num2);
        return firstNum * secondNum;

    }
    division = () => {
        const firstNum = parseFloat(this.num1);
        const secondNum = parseFloat(this.num2);
        return firstNum / secondNum;

    }
};

const calculator = new Calculator(10, 5);
console.log(calculator.sum())
console.log(calculator.subtraction())
console.log(calculator.multiplication())
console.log(calculator.division())
