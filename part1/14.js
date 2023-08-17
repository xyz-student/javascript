// if else condition 

let age = 20;

if(age>=18 && age<40){
    console.log("User can play game");
    if(age == 20){
        console.log("user can play mario ");
    }
    else{
        console.log("user can play any game");
    }
}
else if(age>=40){
    console.log("User can go for walk");
}

else {
    console.log("User can do study");
}

let num = 4;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }