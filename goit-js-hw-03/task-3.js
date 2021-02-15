// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".


const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  console.log(values);

//   const key = Object.keys(employees)
//   console.log(key)

  let max = Math.max.apply(null, values);
  console.log(max);

// let ansver = Object.entries(employees);
//     console.log(ansver);


const   getKeyByValue = function( value ) {
        for( var prop in this ) {
            if( this.hasOwnProperty( prop ) ) {
                 if( this[ prop ] === value )
                     return prop;
            }
        }
    }

    let key = employees.getKeyByValue(max);
    console.log(key); 
    console.log(key, max);

return (`${key}: ${max}`)

};



const getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}




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



