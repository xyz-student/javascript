// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
// const isEven = function(number){
//     return number % 2 === 0;
// }
// // console.log(isEven(2));

// const firstChar = function(anyString){
//     return anyString[0];
// }


var array = [3,4,5,6,7];

const findTarget = (array, target)=>{
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(findTarget(array,5));