let input;
let total = 0;

while (input !== null) {
    input = prompt(`Введите число:`);

  if (input === ``){
  	input = prompt(`Число не введено, пробуйте еще:`);
  }

    if (input === null) {
        break;
    }

    input = Number (input) // превращаем в число
    total = total + input;
    
}

alert(`Общая сумма чисел равна ` + total);