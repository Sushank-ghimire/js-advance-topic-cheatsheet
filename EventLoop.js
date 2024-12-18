/** JavaScript is known for its ability to handle asynchronous tasks efficiently, even though it is single-threaded. */

console.log("Before delay");

function delayBySeconds(sec) {
  let start = (now = Date.now());
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

delayBySeconds(2);

// Executes after delay of 5 seconds
console.log("After delay");


// Function Call Stack
// Main -> LevelOne -> LevelTwo -> console.log (which executes the console.log)
function LevelTwo() {
  console.log("Inside Level Two!");
}

function LevelOne() {
  LevelTwo();
}

function main() {
  LevelOne();
}

main();
