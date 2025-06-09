 let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColor){
	setTimeout(()=>{
		h1.style.color = color;
		if(typeof nextColor === "function"){
			nextColor();
		}
	
	},delay);
}

changeColor("yellow",1000,()=>{
	changeColor("red",1000,()=>{
		changeColor("wheat",1000)
	});
});

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
function colorChange(color, delay){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(color === "ble"){
				reject("err");
			}
			h3.style.color = color;
			resolve();
		},delay);
	});
}

colorChange("red",1000)
.then(()=>{
	return colorChange("ble",1000);
})
.then(()=>{
	return colorChange("blue",1000);
})
.catch((err)=>{
	console.log(err)
})

async function nextColorChange(){
	try{s
		await colorChange("red",1000);
		await colorChange("blue",2000);
	}catch(err){
		console.log(err);
	}finally{
		console.log("done");
	}
}

console.log("hello")