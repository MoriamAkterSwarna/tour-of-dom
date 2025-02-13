// Video 25-7 start here 


// childNodes 

const child = document.getElementById('places-container');
console.log(child.childNodes);
console.log(child.childNodes[0]);

// parentNodes

const parent = document.getElementById('places-container');
console.log(parent.parentNode);

// nextSibling 

const next = document.getElementById('places-title'); 
console.log(next.nextSibling);
console.log(next.nextSibling.nextSibling);

// createElement  & appendChild

const newElement = document.createElement('p');
newElement.innerText = 'This is a new element'; 
document.body.appendChild(newElement);

