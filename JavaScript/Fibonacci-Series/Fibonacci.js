//Implementing Fibonacci Series
// Using the formula an = [Phi^n – (phi)^n] / Sqrt[5].
// where Phi= (1 + Sqrt[5]) / 2 and and phi= (1 – Sqrt[5]) / 2
//This formula is attributed to Binet in 1843, though known by Euler before him.
// Author: @GerardoUbuntu

const fibonacci = (number) => {
    let result = [];
   
    for (let i = 0; i <= number; i++) {
        let Phi = Math.pow((1 + Math.sqrt(5)) / 2, i);
        let phi = Math.pow((1 - Math.sqrt(5)) / 2, i);
        result.push(Math.floor((Phi - phi) / Math.sqrt(5)));
    }
    
    return result;
};
