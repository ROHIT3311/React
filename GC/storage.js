console.log("Hello");

localStorage.setItem("name","Rohit")

let obj1 = {
	name:"John",
	marks:89,
};

localStorage.setItem("user", JSON.stringify(obj1));


console.log(JSON.parse(localStorage.getItem("user")))

sessionStorage.setItem("name","Rohit")

console.log(sessionStorage.getItem("name"))

sessionStorage.setItem("user",JSON.stringify(obj1));

document.cookie = "name=Rohit";
document.cookie="age=22"
document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";


