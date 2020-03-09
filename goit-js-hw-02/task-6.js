let input;
const numbers = [];
let total = 0;

for (let i=0; ; i++) {
    input = prompt('введите любое число')
    if (input === ``){
        input = prompt(`Число не введено, пробуйте еще:`);
    }


if (input === null) {
        total
        break;
    }
    
    //   numbers = [i]
      input = Number (input)

      numbers.push(input)
}
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i]
}

alert(`Сумма набранных чисел = ` + total)





// ------------------------------------------------
// let input;
// let total = 0;

// while (input !== null) {
//     input = prompt(`Введите число:`);

//   if (input === ``){
//   	input = prompt(`Число не введено, пробуйте еще:`);
//   }

//     if (input === null) {
//         break;
//     }

//     input = Number (input) // превращаем в число
//     total = total + input;
    
// }

// alert(`Общая сумма чисел равна ` + total);




const number = [];

while(true){
  let input = +prompt("Введите число");
  number.push(input);


if( input =="" || input == null){
  let total =0;

  for(let i=0; i<number.length; i++){
    total+= numbers[i];
  }
  alert(`Общая сумма чисел равна ${total}`);
  break;
  console.log(number)
}
}




