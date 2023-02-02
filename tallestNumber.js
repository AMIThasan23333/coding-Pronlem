
 function maxInArray(numbers){

    let largest = numbers[0];

     for( let i = 0; i<numbers.length; i++){

        const index = i;

        const element = numbers[index]
    
        if(element > largest){
    
            largest = element;
        }
     }

     return largest;


 }

const heights = [167,155,178,190,247];
const tallest =maxInArray(heights)
console.log(tallest)
