const data = 20;

function Hello(){
	let data = 10;
	console.log("in fn : ",data);
}
Hello()

console.log(data);

let box = document.querySelector(".boxEvent");
let container = document.querySelector(".container");

container.addEventListener("click",()=>{
	console.log("Container is clicked");
});

box.addEventListener("click",()=>{
	console.log("child is clicked");
});

//let li = document.querySelectorAll("li");
//li.forEach((li)=>{
//	li.addEventListener("click",()=>{console.log("li is clicked")});
//});

let ul = document.querySelector("ul");
ul.addEventListener("click",(event)=>{
	if(event.target.tagName === "LI"){
		console.log("LI is clicked due to UL");
	}
});

let input = document.querySelector("input");
function debounce(func, delay){
	let timer;
	return function(){
		clearTimeout(timer);
		timer = setTimeout(()=>{
			func();
		},delay);
	}
}

input.addEventListener("input",debounce(()=>{
	console.log("Data fetched");
},2000));

function throttle(func,delay){
	let lastTimer=0;
	return function(){
		let now = new Date().getTime();
		if(now - lastTimer >= delay){
			func();
			lastTimer = now;
		}
	}
}
let resize=0;
window.addEventListener("resize",throttle(()=>{
	resize++;
	console.log("Size changed",resize);
},2000));

