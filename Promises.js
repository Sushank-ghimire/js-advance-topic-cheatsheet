// Program to check the number is odd or even using Promises in javascript
const checkEven = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("This is and even number");
      return;
    } else {
      reject("An odd number");
    }
  });
};

checkEven(56)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

checkEven(77)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
