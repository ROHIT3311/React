let head = document.querySelector("h1");
console.log(head.innerHTML);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let position = navigator.geolocation.getCurrentPosition(getPosition);
});

// Geo Location
function getPosition(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  head.innerHTML = `${latitude} , ${longitude}`;
}

// Web Workers
let worker = new Worker("worker.js");
worker.postMessage(1000000);
worker.onmessage = function (event) {
  console.log(event.data);
};

// Local Storage
localStorage.setItem("name", "Rohit");
console.log(localStorage.getItem("name"));
let obj  ={ name : "Alex", age:20};
localStorage.setItem("user1",JSON.stringify(obj));
let data = JSON.parse(localStorage.getItem("user1"));
console.log(data);

// Session Storage
sessionStorage.setItem("name","Rohit");

// Cookies
document.cookie = "name=rohit";


