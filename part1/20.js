// while loop 

// 0 se 9 
// dry don't repeat yourself
// let i = 0; // 1 2 3 4

// while(i<10){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);

 let a = "";
for(var i=1;i<=10;i++){
    for(var j=0;j<i;j++){
      if(i === 10){
         a += "&";
      }
      else{
          if(j == 0 || j == i-1){
            a += "^";
            
          }
          else{
            a += "";
          }
      }
    }
    
    a += "<br>";
   
}

document.write(`<pre>${a}</pre>`);



 
 