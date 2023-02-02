
function maxInArray(numbers){

    let largest = numbers[0];

    for( let i =0; i< numbers.length; i++){

        const  index = i

      

        const  element = numbers[index]


        if(element > largest){

            largest =element;

        }

    }

    return largest;
}


const heights = [132,143,144,167,188];

const tallest = maxInArray(heights)

console.log(tallest);
