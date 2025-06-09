function getThis(x){
	this.x = x;
	console.log( "From Normal getThis : ",this.x);
	function inner(){
		console.log("from inner fn : ",this.x);
	}
	inner();
}
getThis(10);


console.log("from global : ",this.x)

delete window.name;
let obj1 = {
	name:"Rohit",
	myFun : function(){
		console.log("From object fn : ",this.name);
		let self = this;
		function getThis2(){
			console.log("from obj inner fn : ",this.name);
		}
		getThis2();
	}
	
}
 obj1.myFun();

let arr1=[1,2,3];
let arr2=[1,2,3];
console.log(arr1==arr2);





console.log("New");
let r = 20;
function getData(){
	
	console.log(r);
	if(r>10){ 
		 let r = 30;
	}
	console.log(r);
}
getData()






