// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".



// ---  ВАРИАНТ  1 ------------

// const countTotalSalary = function(employees) {
//     let sum = 0;
//   let value = Object.values(employees);
//   console.log(value);
//     for(var i = 0; i < value.length; i++){
//         sum += value[i];
//         }
//         return sum;
// };

// ---  ВАРИАНТ  2 ------------
const countTotalSalary = function (employees) {
  let values = Object.values(employees);
  return values.reduce((sum, current) => {
    return sum + current;
  }, 0);
  return total;
};

// ---  ВАРИАНТ  3 ------------
// const countTotalSalary = function (employees) {
//     let values = Object.values(employees);

//     if (!values.length) return null;

//   var total = values.reduce(function(a, b) {
//       return a + b;
//     });
//     return total;
//   };


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400