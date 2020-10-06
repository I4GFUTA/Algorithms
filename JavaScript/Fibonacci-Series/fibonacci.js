//Function that allows showing the Fibonacci series where each term is the sum of the previous two. 
//The function will show elements according to the parameter set in it.
// Author: @mishelpa

function fibonacci(number){

    let fiboArray = [0, 1];
    
    for(i = 2; i < number;i++){
     fiboArray.push(fiboArray[i-1] + fiboArray[i-2]);
    }

    return fiboArray.toLocaleString();
}
