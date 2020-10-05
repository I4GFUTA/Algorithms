// Prints fibonacci series till nth number
// Javascript ES6+
// Author: @manisacharya

const fibonacci = (num) => {
  
  let fib = [0, 1];

  for(let i = 2; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib;
}
