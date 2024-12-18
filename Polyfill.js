/**  1. Bind() Method
The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called. */

let user = { name: "Sushank ghimire" };

const user1 = {
  name: "John Doe",
  age: 3,
  printName: function (age) {
    console.log(this.name, this.age || age);
  },
};

const callName = user1.printName.bind(user, 44);
console.log(callName, callName());

let nameObj = {
  name: "Tony",
};

let PrintName = {
  name: "steve",
  sayHi: function (age) {
    console.log(this.name + " age is " + age);
  },
};

Object.prototype.MyBind = function (bindObj, ...args) {
  bindObj.myMethod = this;
  return function () {
    bindObj.myMethod(...args);
  };
};
let HiFun = PrintName.sayHi.MyBind(nameObj, 42);
HiFun();

/** 2. Call() Method
The Call() Method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.  */

const callObj = { name: user.name };

const callMainObj = {
  name: "John Doe",
  age: 33,
  sayHi: function (age) {
    console.log(this.name, this.age || age);
  },
};
callMainObj.sayHi.call(callObj, 34);

/** 3. Apply() Method
The Apply() Method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function. */
let nameObj1 = {
  name: "Steve Brother",
};
let PrintName1 = {
  name: "steve",
  sayHi: function (...age) {
    console.log(this.name + " age is " + age);
  },
};
PrintName1.sayHi.apply(nameObj1, [42]);
