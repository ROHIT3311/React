/* let arr= [ 10,20,30,40,50]

 for(let ele of arr){
	console.log(ele);
}

for(let ele in arr){
	console.log(ele);
}
*/


console.log("Global Scope");
let globalVar = "Rohit";

if(true){
	let globalVar = "John"
	console.log(globalVar);

}
console.log(globalVar)

console.log("Block Scope");
function localScope(){
	let a = 10;
	console.log(a);
}
localScope();
// console.log(a);


console.log("Lexical Scope")
function outer(){

	let outerVar = "i am outer";
	
	function inner(){
		let innerVar = "i am inner";
		console.log(`${outerVar} but in inner`);
	}
	inner();
}
outer();


