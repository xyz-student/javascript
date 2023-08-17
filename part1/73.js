function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,  
     
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}
const user3 = {
    firstName : "Rohan",
    age: 5,
}


// apply
about.apply(user1, ["guitar", "bach"]);

const func = about(user2);
// console.log(func);
about.apply(user3,["ludo","musician"]);

