let obj1 = {
	name:"Rohit",
	greet:function(){
		console.log("from normal function : ",this);
		console.log("from normal function : ",this.name);
	}
}
obj1.greet();

let obj2 = {
	name:"Rohit",
	greet:()=>{
		console.log("from arrow function : ",this);
		console.log("from arrow function : ",this.name);
	}
}
obj2.greet();


let obj3 = {
	
	name:"Rohit",
	obj3_1:{
		greet:()=>{
			console.log("from arrow function : ",this);
			console.log("from arrow function : ",this.name);
		}
	}

}
let g = obj3.obj3_1;
g.greet();


function obj4 (){
	this.name = "Rohit";
	this.greet = ()=>{
		console.log(this);
		console.log(this.name);
	}	
}
let obj4_1 = new obj4();
obj4_1.greet();

function getName(){
	this.name = "Rohit";
	function getData(){
		console.log(this.name);
	}
	getData();
}
getName();


function A(){
	let a = 10;
	let B = ()=>{
		console.log(a);
		let C = ()=>{
			a = 100;
			console.log("in c",a)
		}
		C();
	}
	a=90;
	B();
}
A();

