/** Generators are a special type of function in JavaScript that can pause and resume execution. They are defined using the function* syntax (note the asterisk *).

Unlike regular functions that run to completion when called, generators allow you to pause their execution using the yield keyword, return intermediate results, and resume later from where they left off. They are particularly useful for scenarios like asynchronous programming, iterating over large data sets, or implementing custom iterators. */
function* simpleGenerator() {
  yield "Hello"; // Pause and return "Hello"
  yield "World"; // Pause and return "World"
  yield "Done"; // Return "Done" and finish
  return "Very Done";
}

// Using the generator
const gen = simpleGenerator();

console.log("\nIntroduction Section : ");
console.log(gen.next()); // { value: "Hello", done: false }
console.log(gen.next()); // { value: "World", done: false }
console.log(gen.next()); // { value: "Done", done: true }
console.log(gen.next()); // { value: "Very Done", done: true }
console.log(gen.next()); // { value: undefined, done: true }

// Counter generator function
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
const countGenerator = counter();
console.log("\nCounter Section : ");
console.log(countGenerator.next());
console.log(countGenerator.next());
console.log(countGenerator.next());
console.log(countGenerator.next());
console.log(countGenerator.next());
console.log(countGenerator.next());

// Finonacci using Generator Function
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

console.log("\nFibonacci number Section : ");
console.log(fibGen.next()); // 0
console.log(fibGen.next()); // 1
console.log(fibGen.next()); // 1
console.log(fibGen.next()); // 2
console.log(fibGen.next()); // 3
console.log(fibGen.next()); // 5
