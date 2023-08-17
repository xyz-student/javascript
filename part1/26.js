// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

let fruits = ["apple", "mango", "grapes"];
document.write(fruits[0]+"<br>");
document.write(fruits[1]+"<br>");
document.write(fruits[2]+"<br>");

// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);


let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing 