let arr = [1, 2, 3, 4, 5];
let obj = {
  name: "Rohit",
  age: 22,
};

for (const o in obj) {
  console.log(o);
}

for (let ele of arr) {
  console.log(ele);
}
