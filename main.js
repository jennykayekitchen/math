// A function to add two values together. 
// This function needs to define two parameters - the two numbers that you want to add together.
// In the adding function, add the values of the two parameters and return the result
const addition = (num1, num2) => {
    additionAnswer = num1 + num2
    return additionAnswer
};


// A function to multiply a single number by 2. 
// This function takes one parameter - the number you want to multiply by 2.
// In the multiplication function, multiply the value of the single parameter by 2 and return the result.
const multiply = (num1) => {
    multiplicationAnswer = num1 * 2
    return multiplicationAnswer
};

// Invoke the adding function, provide two values as arguments, and the store what gets returned into a variable.
let adding = addition(4,14);

// Then invoke the multiplication function and provide the variable from the previous step as the argument. Store the result into a variable.
let multiplying = multiply(18);

// Use console.log() to output the end result of the multiplication function.
console.log(multiplying);

// As an example, if you pass 4 and 14 to the first function, then the final output should be 36.