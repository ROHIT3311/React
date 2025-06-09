// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// child.addEventListener("click",()=>{
// 	console.log("Child is clicked");
// })

// parent.addEventListener("click",()=>{
// 	console.log("Parent is Clicked");
// })

// let input = document.querySelector("input");

// function debounce(fun, delay){
// 	let timer;
// 	return function(){
// 		console.log(timer);
// 		clearTimeout(timer)
// 		timer = setTimeout(()=>{
// 			fun();
// 		},delay)
// 	}
// }

// input.addEventListener("input",debounce(()=>{
// 	console.log("Clicked");
// },3000));

// function throttle(fun,delay){
// 	let flag = true;
// 	return function(){
// 		if(flag){
// 			fun();
// 			flag = false;
// 			setTimeout(()=>{
// 				flag=true;
// 			},delay)
// 		}
// 	}
// }

// window.addEventListener("resize",throttle(()=>{
// 	console.log("Resized")
// },5000));

// let list = document.querySelector(".list");

// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log(event.target.textContent);
//     console.log("List is Clicked");
//   }
// });

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

let input = document.querySelector(".input");

input.addEventListener(
  "input",
  debounce((event) => {
    console.log("clicked");
    console.log(event.target.value);
  }, 2000)
);

function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Resized");
  }, 1000)
);
