// how to iterate object 
const person = {
    name: "harshit" + "<br>",
    age: 22  + "<br>",
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    document.write(key," : " +person[key]);
}
document.write("</br>");

// document.write(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// document.write(val);

// for(let key of Object.keys(person)){
//    document.write(person[key]);
// }