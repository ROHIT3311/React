

let box = document.querySelector(".box");
console.log(box.innerHTML);
function changeColor(color, delay, nextColor){
	setTimeout(()=>{
		box.style.backgroundColor = color;
		nextColor();
	},delay);
}

changeColor("yellow",1000,()=>{
	changeColor("blue",1000,()=>{
		changeColor("black",1000)
	})
});

console.log("Hello")