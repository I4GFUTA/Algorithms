/* Quadratic Equtaion Implementation in TypeScript
   The Standard form of a Quadratic Equation is:
   ax^2 + bx + c = 0
   where x = (-b ± Sqrt(b^2 -4ac)) / 2a
   Author: @GerardUbuntu
*/

const quadraticEquation = (a: number, b: number, c: number): Array<number|string> => {
  let roots: Array<number | string> = [];
  // discriminant = b^2-4ac
  const discriminant = (b ** 2) - (4 * a * c);

  // calculate the first value = -b / 2a
  const firstValue = -b / (2 * a);

  if (discriminant > 0) {  // two real solutions
    const secondValue = Math.sqrt(discriminant) / (2 * a);
    roots.push(firstValue + secondValue);
    roots.push(firstValue - secondValue);
  } else if (discriminant == 0) { // one real solutions
      roots.push(firstValue);
  } else { // pair of complex solutions
      const realPart = firstValue.toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      roots.push(`${realPart} + ${imaginaryPart}i`);
      roots.push(`${realPart} - ${imaginaryPart}i`);
  }
  
  console.log(`The roots of the quadratic of equation ${roots.length > 1 ? "are" : "is" } ${roots.toLocaleString()}`)
  
  return roots
};


quadraticEquation(5,6,1);
quadraticEquation(1,10,25);
quadraticEquation(5,2,1)


