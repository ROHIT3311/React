function x(){
	let x = 10;
	return function y(num){
		
		console.log(x,num);
	}

	
}

let y = x();
console.log(y);
y(20);