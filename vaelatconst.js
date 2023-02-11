

const numbers = [1,2,34,6]
   
let sum =0;
   for( let i =0; i< numbers.length; i++){
   
    // let  number = numbers[i];  
/* if u declare using let and clg number u get 6 */
   const  number = numbers[i];  
    sum = sum + number;
   }
   console.log(sum)
   console.log(number);