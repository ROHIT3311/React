// Normal Function
function hello() {
  console.log("Hello");
}
hello();

// Function expression
let greet = function () {
  console.log("Greet");
};
greet();

// Arrow function
let hi = () => {
  console.log("Hi");
};
hi();

//IIFE
let hie = (function () {
  console.log("Hie");
})();

//High Order function
function one() {
  return 1;
}
function two(fn) {
  console.log(fn());
  return 2;
}
console.log(two(one));

let a = 100;
function outer() {
  //   let a = 10;
  console.log(a);
  function inner() {
    console.log(a);
    // a = 50;
    function innerToinner() {
      console.log(a);
    }
    innerToinner();
  }

  inner();
}

outer();

let fn = function () {
  let a = 10;
  return a;
};
console.log(fn());
