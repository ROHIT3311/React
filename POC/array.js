let arr = [1,2,3,4,5];
console.log(arr);

// forEach
console.log("forEach")
arr.forEach((ele)=>{
	console.log(ele);
});

// For__in
console.log("for__in")
for(let idx in arr){
	console.log(idx);
}

//for__of
console.log("for__of")
for(let ele of arr){
	console.log(ele);
}

// push
console.log("push");
arr.push(6);
console.log(arr)

// unshift
console.log("unshift")
arr.unshift(0);
console.log(arr);

// pop
console.log("pop")
arr.pop()
console.log(arr);

//shift
console.log("shift")
arr.shift();
console.log(arr);

// splice
console.log("splice");
// array.splice(start, deleteCount, item1, item2, ...)
arr.splice(3,0,10,20,30,40);
console.log(arr);

// slice
// slice(start_idx, end_idx);
let numbers = arr.slice(1,5);
console.log(numbers)

// map
console.log("map");
let arrMap = arr.map((ele)=>{
	return ele=ele**2;
});
console.log(arr);
console.log(arrMap);

//filter
console.log("filter");
let arrFilter = arr.filter((ele)=>{
	return ele > 10;
})
console.log(arr);
console.log(arrFilter);

// Found
console.log("Found");
let found = arr.find((num)=>{
	return num > 10;
})
console.log(found);


let str = "hello hi hiee";
console.log("slice",str.slice(0,4));

console.log("split",str.split(" "));






