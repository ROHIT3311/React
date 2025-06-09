// let value = 10;
// function getValue() {
//   console.log(value);
// }
// getValue();

// function getNestedValue() {
//   let value = 20;
//   console.log(value);
//   function Nested() {
//     console.log(value);
//   }
//   value = 30;
//   console.log(value);
//   return Nested;
// }
// let forNested = getNestedValue();
// forNested();

function x() {
  let a = 0;
  return function inc() {
    a++;
    console.log(a);
  };
}
let y = x();
let z = x();
for (let i = 0; i < 5; i++) {
  z();
}

// function printName() {
//   const user = "rohit";
//   function print() {
//     console.log("from print", user);
//   }
//   console.log(user);
//   setTimeout(print, 2000);
// }

// printName();

// console.log("from global : ", this);

// function getThis() {
//   this.x = 10;

//   console.log("from function : ", this);
//   console.log("from function x : ", this.x);

//   return () => {
//     console.log(this.x);
//   };
// }
// let getInner = getThis();
// console.log("from global x : ", this.x);
// getInner();

// const obj = {
// 	userName:"Rohit",
// 	fn : function() {
// 		let name = "AAA";
// 		console.log(this.userName);
// 		return ()=>{
// 			console.log(name);
// 		}
// 	}
// }

// obj.fn()();

let obj = {
  name: "John",
  fn: function () {
    function fn2() {
      console.log(this);
    }
    fn2();
  },
};
obj.fn();
