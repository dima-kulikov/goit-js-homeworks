// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".




// -------------------------------------------- ВАРИАНТ -1------------------

// const findBestEmployee = function(employees) {
//   const values = Object.values(employees);

//   let max = Math.max.apply(null, values);

//   const getKeyByValue = function(value) {
//     for (var prop in employees) {
//       if (employees.hasOwnProperty(prop)) {
//         if (employees[prop] === value)
//           return prop;
//       }
//     }
//   }
//   let itog = getKeyByValue(max);
//   console.log(itog);
//   console.log(getKeyByValue(max));

// return (`${itog}: ${max}`)
// };

// -------------------------------------------- ВАРИАНТ -2------------------

const findBestEmployee = (employees) => {
  const maxValue = Math.max(...Object.values(employees));

  for (let employee in employees) {
    if (employees[employee] === maxValue)
      return employee;
  }
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

// console.log(employees.getKeyByValue(29));
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux




