// function outer() {
//   console.log(this);
//   function inner() {
//     console.log(this);
//   }
//   inner();
// }
// outer();

// let arrowFn = () => {
//   console.log(this);
//   let arrowinnerfn = () => {
//     console.log(this);
//   };

//   arrowinnerfn();
// };
// arrowFn();

// function Fn() {
//   this.name = "Rohit";
//   console.log(this);
//   this.newFn = () => {
//     console.log(this);
//   };
//   // this.newFn();
// }
// let f1 = new Fn();
// f1.newFn();

// function fn() {
//   console.log(this);
//   return {
//     name: "Rohit",
//     greet: function () {
//       console.log(this);

//       function hello() {
//         console.log("In hello() of greet : ", this);
//       }

//       hello();
//     },

//     newObj: {
//       name: "John",
//       great: function () {
//         console.log(this);
//       },
//     },
//   };
// }
// let f1 = fn();
// f1.greet();
// f1.newObj.great();

// let obj = {
//   name: "Rohit",
//   greet: function () {
//     console.log(this);

//     function name() {
//       console.log(this);
//     }

//     name();
//   },

//   newObj: {
//     great: () => {
//       console.log(this);
//     },
//   },
// };
// obj.greet();
// obj.newObj.great();

// let obj = {
//   name: "Rohit",
//   greet: setTimeout(function () {
//     console.log(this);
//   }, 1000),
// };

// function person() {
//   console.log(this.name);
//   console.log(this);
// }

// let obj = {
//   name: "Rohit",
// };

// // person.call(obj);

// let fnCall = person.bind(obj);
// fnCall();

const obj4 = {
  name: "ath",
  myfunc: setTimeout(function () {
    console.log(this);
  }, 2000),
};

obj4.myfunc();
