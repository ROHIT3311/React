let element = document.createElement("h1");
element.textContent = "I'm a Content";
element.classList.add("content","newDiv");
element.style.backgroundColor = "yellow";
document.body.appendChild(element);
console.log(element.classList);
element.classList.remove();

let childElement = document.createElement("h2");
childElement.textContent = "Im child of Content";
element.appendChild(childElement);

let container = document.querySelector(".container");
console.log(container.innerHTML, container.textContent, container.innerText);

let ele1 = document.createElement("h4");
ele1.textContent ="ele 1";
let ele2 = document.createElement("h4");
ele2.textContent ="ele 2";
let ele3 = document.createElement("h4");
ele3.textContent ="ele 3"

document.body.append(ele1,ele2,ele3);
console.log(ele1.innerText);