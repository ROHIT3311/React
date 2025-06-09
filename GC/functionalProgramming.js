const user = {
	name:"Alice",
	age:26,
	marks:{
		sub1:20,
		sub2:30
	}
}

const updateUser = {
	...user,
}

updateUser.age = 29;

console.log(user.age,updateUser.age);

updateUser.marks.sub1=40;
console.log(user.marks.sub1,updateUser.marks.sub1)

const greet = function(){
	console.log("Hello");
}
const greet2 = function(fn){
	fn();
	console.log("Hello2");
}
greet2(greet);

const add2 = (x,n) => x + n;
const multiplyBy3 = (x) => x * 3;

const add2ThenMultiply3 = (x,n) => multiplyBy3(add2(x,n));

console.log(add2ThenMultiply3(4,2));

const multiply = (a) => (b) => a + b;

console.log(multiply(2)(3))