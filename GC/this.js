function greet1(){
	
	console.log(this);
	function greet2(){
		console.log(this);
	}
	greet2();
}
greet1();

let obj1 = {
	name:"Rohit",
	greet:function(){
		console.log(this);
	}
}
obj1.greet();

let obj2 = {
	name:"ROhit",
	greet:()=>{
		console.log(this);
	}
}
obj2.greet();

let obj3 = {
	name:"Rohit",
	greet:()=>{
		console.log(this);
	},
	newObj:{
		great:()=>{
			console.log(this)
		}
	}
}
obj3.newObj.great(); 

function obj4(){
	this.name="Rohit";
	this.greet = ()=>{
		console.log(this);
		function hello(){
			console.log(this);
		}
		hello();
	}
}
let o1 = new obj4();
o1.greet();

let box = document.querySelector(".box");
box.addEventListener("click",()=>{
	console.log(this);
});
