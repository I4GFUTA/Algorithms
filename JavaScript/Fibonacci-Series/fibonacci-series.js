// Prints fibonacci sequence till nth term
// Javascript ES6+
// Author: @manisacharya

const fibonacci = (n) => {
  if(n <= 1){
    return n;
  }
  else{
    return(fibonacci(n-1) + fibonacci(n-2))
  }
}

const print_sequence = (fib) => {
  if (fib <= 0){
    console.log("Please enter a positive integer");
  } else {
    console.log("Fibonacci sequence:");
    for(let i = 0; i < fib; i++) {
      console.log(fibonacci(i))
    }
  }
}

// console.log(print_sequence(5));
