console.log(this);	// window object

// this with function
function Hello(){
	console.log(this);	// window object
}
Hello();

// this with normal function inside the object 
const Student = {
	name:"Rohit",
	age:20,
	greet:function(){
		console.log(this);	// Student as an object which will show the object properties
	}
}
Student.greet();

// this with arrow function inside the object
const Employee = {
	name:"Rohit",
	age:20,
	newObj:{
		greet: ()=>{
		console.log(this);	// Window Object because arrow function doesnt have its own this and here it will take from parent which is already a window
		}
	}
	
}
Employee.newObj.greet();

// this with constructor function with normal function as property
function Department(dept){
	this.dept = dept;
	this.greet = function(){
		console.log(this);	// new instance of an object which is created
	};
	console.log(this);	// new instance of an object which is created
}
let d1 = new Department("JS");
d1.greet();

// this with constructor function with arrow function as property
function Payment(amount){
	this.amount = amount;
	this.greet = () => {
		console.log(this);	// new instance of an object which is created
	};
	console.log(this);	// new instance of an object which is created
}
let p1 = new Payment(1000);
p1.greet();

// this with closure
function outer(){
	this.name = "Rohit";
	function inner(){
		console.log("In inner but value from outer : ",this.name);
	}
	inner();
}
outer();

function outer2(){
	this.name = "John";
	return function(){
		console.log("In inner but value from outer : ",this.name)
	}
}
let inner = outer2();
inner();

function outer3(){
	this.name="John";
	return ()=>{
			console.log("In inner but value from outer : ",this.name)
	}
}
let inner2 = outer3();
inner2(); 
