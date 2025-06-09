// Object Creation

/* let obj = {
	name : "John",
	age: 20,
};
console.log(`${obj.name} ${obj.age}`);

let obj2 = new Object();
obj2.name="Rohit";
obj2.age=22;
console.log(`${obj2.name} ${obj2.age}`);

let obj3 = Object.create(obj);
obj3.greet = function(){
	console.log("Greet");
}
console.log(`${obj3.name} ${obj3.age}`);
obj3.greet();

function Person(name,age){
	this.name = name;
	this.age=age;
}

let p1 = new Person("Sanmay",21);
console.log(`${p1.name} ${p1.age}`);

class Employee{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	
	getData(){
		console.log(`${this.name} ${this.age}`);
	}
}

let e1 = new Employee("Alex",25);
e1.getData();

function Student(name, age){
	return {
		age:age,
		name:name,
	}
}
let s1 = Student("Nancy",30);
console.log(s1);


let obj1 = {
	name:"Rohit",
	age:20,
	marks:{
		sub1:89,
		sub2:90,
	},
	greet:function(){
		console.log("Greet");
	}
}


let newObj1 = Object.assign({},obj1);

obj1.marks.sub1 = 80;
newObj1.marks.sub2= 0;

newObj1.greet2= function(){
	console.log("Greet 2");
}

console.log("obj1 : ",obj1);
console.log("copy of obj1",newObj1);

let newObj2 = JSON.parse(JSON.stringify(obj1));
console.log(newObj2);

let newObj3 = structuredClone(obj1);
console.log(newObj3); */

// Inheritance

// Prototype Inheritcance

// const grandparent = {
//   greet: function () {
//     console.log("grand parent");
//   },
// };

// const parent = Object.create(grandparent);
// parent.greet();
// const child = Object.create(parent);
// child.greet();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} make a sound`);
// };

// const dog = new Animal("Sheru");
// dog.speak();

// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }
// }

// class Car extends Vehicle {
//   constructor(type, tyre) {
//     super(type);
//     this.tyre = tyre;
//   }

//   getData() {
//     console.log(`${this.type} ${this.tyre}`);
//   }
// }

// let c1 = new Car("Hatchback", 4);
// c1.getData();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Employee(dept) {
//   User.call(this, "Rohit", 21);
//   this.dept = dept;
//   this.show = function () {
//     console.log(this.name, this.age, this.dept);
//   };
// }

// Employee.prototype = Object.create(User.prototype);
// Employee.prototype.constructor = Employee;
// console.log(Employee.prototype.constructor === Employee);

// let e1 = new Employee("JS");
// e1.show();

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
// }
// console.log(Employee);

// function Dept(dept) {
//   Employee.call(this, "Rohit", 22);
//   this.dept = dept;
// }

// Dept.prototype = Object.create(Employee.prototype);
// Dept.prototype.constructor = Dept;

// Dept.prototype.show = function () {
//   console.log(this.name, this.age, this.dept);
// };

// // console.log(Dept.prototype.constructor === Employee);
// let d1 = new Dept("Devops");

// console.log(Dept.__proto__ == Employee.prototype);
// console.log(Employee.prototype);
// d1.show();

// function add(a = 10, b = 10) {
//   return a + b;
// }

// console.log(add(undefined, undefined));

// let res = false;

// function hello() {
//   console.log("hello");
// }
// if (res || hello()) {
//   console.log("done");
// }

let obj = {
  name: "Rohit",
  marks: {
    sub1: 20,
    sub2: 30,
  },
};

console.log(obj);

let shallowCpy = Object.assign({}, obj);
let shallowCpy2 = { ...obj };

console.log(shallowCpy);
console.log("After changes");
shallowCpy.name = "John";
shallowCpy.marks.sub1 = 100;
console.log(obj);
console.log(shallowCpy);

console.log("COPY 2");
console.log(obj);
console.log(shallowCpy2);
