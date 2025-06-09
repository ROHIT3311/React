// let str = "hello rohit";
// let newStr = str.split("").reverse().join("");
// console.log(newStr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.slice(0, 2);
// console.log(arr);
// arr.splice(1, 0, 10, 20);
// console.log(arr);

// let newArr = arr.map((item) => {
//   return item * 2;
// });
// console.log(newArr);

// arr.forEach((item) => {
//   if (item == 2) {
//     return;
//   }
//   console.log(item);
// });

// for (let ele of arr) {
//   if (ele == 2) {
//     break;
//   }
//   console.log(ele);
// }

// function outer() {
//   let counter = 0;

//   function inner() {
//     counter += 1;
//     console.log(counter);
//   }

//   return inner;
// }

// let o1 = outer();
// o1();
// o1();
// o1();

// Event

// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true
// );

// child.addEventListener("click", () => {
//   console.log("Child Clikced");
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log("Li", e.target.textContent);
//   }
// });

// let input = document.querySelector("input");

// function debounce(fn, delay) {
//   let timer;
//   return function (e) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(e);
//     }, delay);
//   };
// }

// input.addEventListener(
//   "input",
//   debounce((e) => {
//     console.log(e.target.value);
//   }, 1000)
// );

function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Resized");
  }, 2000)
);

// const obj = {
//   name: "Sameer",
//   method: function () {
//     console.log("method:", this.name); //

//     const arrowInside = () => {
//       console.log("arrowInside:", this.name); //
//     };

//     function normalInside() {
//       console.log("normalInside:", this.name); //
//     }

//     arrowInside();
//     normalInside();
//   },
// };
// obj.method();

// const obj2 = {
//   name: "Sameer",
//   method: () => {
//     console.log("arrow method:", this.name); //

//     function normalInside() {
//       console.log("normalInside:", this.name); //
//     }

//     const arrowInside = () => {
//       console.log("arrowInside:", this.name); //
//     };

//     normalInside();
//     arrowInside();
//   },
// };
// obj2.method();

let child = document.querySelector(".child");

// function changeColor(delay, color, fn) {
//   setTimeout(() => {
//     child.style.backgroundColor = color;
//     fn();
//   }, delay);
// }

// changeColor(1000, "blue", () => {
//   changeColor(1000, "yellow", () => {
//     changeColor(1000, "red");
//   });
// });

// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       child.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// colorChange("red", 1000)
//   .then(() => {
//     return colorChange("blue", 1000);
//   })
//   .then(() => {
//     return colorChange("black", 1000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function change() {
//   let c1 = await colorChange("red", 1000);
//   let c2 = await colorChange("blue", 1000);
//   let c3 = await colorChange("black", 1000);
// }
// change();

// let obj1 = {
//   name: "Rohit",
// };

// function obj2() {
//   this.name = "Rohit";
//   this.age = 22;
// }
// let ob2_1 = new obj2();
// // console.log(ob2_1);

// let obj3 = Object.create(obj1);
// obj3.age = "22";

// let obj4 = new Object();

// function obj5(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// let obj5_1 = obj5("Rohit", 22);
// console.log(obj5_1);

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Dept(dept) {
//   Employee.call(this, "Rohit", 22);
//   this.dept = dept;
// }

// Dept.prototype = Object.create(Employee.prototype);
// Dept.prototype.constructor = Dept;

// console.log(Dept.prototype.constructor === Dept);

// Dept.prototype.show = function () {
//   console.log(this.name, this.age, this.dept);
// };

// let d1 = new Dept("DevOps");
// d1.show();

// function addOne(num) {
//   return num + 1;
// }
// function addTwo(num) {
//   return num * 2;
// }

// function addOnethenAddTwo(num) {
//   return addTwo(addOne(num));
// }

// console.log(addOnethenAddTwo(5));

// const mult = (x) => (y) => x * y;

// console.log(mult(3)(8));

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dept extends Student {
  constructor(name, age, dept) {
    super(name, age);
    this.dept = dept;
  }

  show() {
    console.log(this.name, this.age, this.dept);
  }
}

let s1 = new Dept("Rohit", 22, "CSE");
s1.show();

let obj = {
  name: "Rohit",
};

function functionName() {
  console.log(this.name);
}

let f1 = functionName.bind(obj);
f1();
