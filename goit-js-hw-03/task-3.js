// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".


let max = 0;

const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  console.log(values);

//   const key = Object.keys(employees)
//   console.log(key)

  let max = Math.max.apply(null, values);
  console.log(max);


  const getKeyByValue = function(value) {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] === value)
          return prop;
      }
    }
  }
  let itog = employees.getKeyByValue(max);
  console.log(itog);
  console.log(employees.getKeyByValue(max));



return (`${itog}: ${max}`)
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




