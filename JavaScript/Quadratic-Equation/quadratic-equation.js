// Quadractic equation function to calculate the values which solve an equation with the following scheme
// ax² + bx + c = 0
//
// It accepts three number corresponding to the numerical coefficients of the equation
//[LANGUAGE] Javascript ES6+
// Author: @Linzeur

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 */

const quadraticEquationSolutions = (a, b, c) => {
  //validate if the arguments are numbers
  if (parseFloat(a) == NaN || parseFloat(b) == NaN || parseFloat(c) == NaN) {
    console.log('The arguments are not numbers');
    return [];
  }

  //validate if the first numerical coefficient is greater than zero
  if (a <= 0) {
    console.log('The equation is an incomplete quadratic');
    return [];
  }

  //User the quadractic function represent by this
  //x = (-b/2a) ± √((b² - 4ac)/2a)

  //calculate discriminat to evaluate the nature of the roots
  const discriminant = b * b - 4 * a * c;

  //calculate first value of quadractic function
  const firstValue = -b / (2 * a);

  const roots = [];

  //if the solution are real and different roots
  if (discriminant > 0) {

    const secondValue = Math.sqrt(discriminant) / (2 * a);
    roots.push(firstValue + secondValue);
    roots.push(firstValue - secondValue);
    console.log(
      `The roots of quadratic equation are ${roots[0]} and ${roots[1]}`
    );

  } else if (discriminant === 0) {

    roots.push(firstValue);
    roots.push(firstValue);
    console.log(`The unique root of quadratic equation is ${roots[0]}`);

  } else {

    const realPart = firstValue.toFixed(2);
    const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    roots.push(`${realPart} + ${imaginaryPart}i`);
    roots.push(`${realPart} - ${imaginaryPart}i`);

    console.log(
      `The roots of quadratic equation are ${roots[0]} and ${roots[1]}`
    );
    
  }

  return roots;
};

quadraticEquationSolutions(1, -3, 10);
quadraticEquationSolutions(1, -6, -16);
quadraticEquationSolutions(1, 0, -16);
quadraticEquationSolutions(0, 4, -2.5);
quadraticEquationSolutions(10, 4, -2.5);

