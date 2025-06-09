console.log("Start")

setTimeout(()=>{
	console.log("In set timeout")
},0);

Promise.resolve().then(()=>{
	console.log("In Promise");
});

console.log("End");


let box = document.querySelector(".box");

function changeColor(color, delay){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			box.style.backgroundColor = color;
			resolve();
		},delay);
		
	});
}

/* changeColor("yellow",1000)
.then(()=>{
	return changeColor("blue",1000);
})
.then(()=>{
	return changeColor("grey",1000);
})
.catch((err)=>{
	console.log(err);
}); */

async function colorChange(){
	try{
		await changeColor("yellow",1000);
		await changeColor("blue",1000);
		await changeColor("red",1000);
	}catch(err){
		console.log(err);
	}
}
colorChange();