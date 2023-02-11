
const numbers = [1,2,3,4,6,7];

// let output =[];


//   for(const number of numbers){

//     const doubled = number *2;

//      output.push(doubled);
//   }

//   console.log(output)



  function getDouble(numbers){

    let output =[];


  for(const number of numbers){

    const doubled = number *2;

     output.push(doubled);
  }

  return output;

  }

  const result = getDouble(numbers)

  console.log(result);