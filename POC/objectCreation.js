let obj1 = {
	name:"Rohit",
	age:20,
};
console.log(obj1.name);

let obj2 = new Object();
obj2.name = "Alex";
obj2.hello = function(){console.log("Hello from obj 2");}
console.log(obj2.name);
obj2.hello();

let obj3 = {
	name:"Nancy",
}

let obj3_1 = Object.create(obj3);
console.log(obj3_1.name);

function createObject (name){
	this.name = name;
}
let obj4 = new createObject("John");
obj4.age = 20;
console.log(obj4.age);


function factoryObject(name){
	return{
		name:name,	
	}	
}
let obj5 = factoryObject("Rohit");
console.log(obj5.name);


