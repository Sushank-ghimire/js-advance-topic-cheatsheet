// Function Currying

// Function to add different numbers by taking input
function add(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}

// 1st Way
const sum = add(1)(2)(3);

// another way
let sum1 = add(5);
let secondSum = sum1(5);
let finalSum = secondSum(5);

console.log(sum, finalSum);
