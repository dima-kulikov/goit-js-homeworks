// const numbers = [1, 2, 3, 4, 5];
// const myNumber = [];
// for (let i = 0; i<numbers.length; i++){
// if( 3 < numbers[i]){
//     myNumber.push(numbers[i])
// };
// };
// const myNumber = numbers.filter( value =>{
//     return value > 3
// })
// console.log(numbers)
// console.log(myNumber)
// ---------------------------------

// const mas = [1,2,3,4,5];
// const number =[];
// function newMas(array, value){
//   for(let i=0; i<array.length; i++){
//      number.push(array[i]*value);
//   }
// }
// newMas(mas,2);
// console.log(number)
// ----------------------------------


// const number = (array,value)=>{
//     for(let i=0; i<array.length; i++){
//       array[i] = array[i] * value;
//     }
//   };

//   const mas = [1,2,3,4,5];
//   number(mas, 2);
//   console.log(mas)
// --------------------------------------------

const mas = [1,2,3,4,5];

const number = (array,value)=>{
    const masNew = [];
    for(let i=0; i<array.length; i++){
        masNew.push(array[i] * value);
    }
    return masNew
  };
const masNew2 = number(mas, 2);


  number(mas, 2);
  console.log(mas)
  console.log(masNew2)