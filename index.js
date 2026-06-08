// Task
// 1. write a function that modular remaining value. the function should accept two parameters A and B where A is the actual value and B is the divisible number. if A is perfectly divisible by B then return a string that says "This number ${A} has no remender as it's perfectly dividisible by ${Z} without a reminder" return the value if it as a modular value

// 2. Write a function that divides perfectly. The function should accept two parameters Y and Z, where Y is the actual Number value and Z is the divisible number, if Y is not perfectly divisible by Z then return a string that says "This number ${Y} can'Ts be perfectly divided by ${Z}" and if its perfectly divisible then return the value. (function name shoul be "perfectDivisible")

//3. do same for additions - two parameters as well as others
//4. do same for Multiplication - two parameters as well as others

// Solutions 
function perfectDivisible(Y, Z) {
    const value = Y / Z
    // Where VALUE is the declared variable for the result of the division by Y / Z

    const isDivisible = Y % Z === 0 
    // This returns if it's perfectly divisible and no remeainder
    
    if (!isDivisible) {
    // If/else check is a conditional statement used to check for true or not
        return `This number ${Y} cannot be perfectly divided by ${Z}`
    } else {
        return value 
    }
}

const perfectDivisibleResult = perfectDivisible(7, 3)
console.log('perfectDivisibleResult === ', perfectDivisibleResult);


// Addition solution
function addition(M, N) {
    const result = M + N // Where t
    return result
    
}
const additionResult= addition(8, 3)
console.log("additionResult", additionResult)

// Multiplication solution
function multiplication(E, F) {
    const answer = E * F
    return answer
}
const multiplicationResult = multiplication(7, 4)
console.log("multiplicationResult", multiplicationResult)


// modular solution
function getRemainder(a, b){
    const respect = a / b
   const getRemainder= a % b === 0

    if(!getRemainder)
return `This number ${a} has no remainder as it's perfectly divisible by ${b} without a remainder`;
     else 
        return respect
    
}
const getRemainderResult = getRemainder(8, 3)
console.log("getRemainderResult", getRemainderResult)

// solution for loop
function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

// Call the function
printNumbers(5);

// solution for and 
function isEligible(score, attendance) {
  return score >= 50 && attendance >= 75;
}

console.log(isEligible(60, 80)); // true
console.log(isEligible(60, 60)); // false

// for solutiontag 
 function greet(name) {
  console.log("Hello, " + name);
}

greet("John");