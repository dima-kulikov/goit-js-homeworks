// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
 let value =[];
 for (const product of arr){
    value.push(product[prop]);

//    if (prop in product){
//     value.push(product[prop]);
//    };

};
   return value;
};


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'category')); // []




// ЕЩЕ ОДИН ПРИМЕР
// const girls = [
//     { name: 'ИРА', price: 1300, quantity: 5 },
//     { name: 'КАТЯ', price: 2700, quantity: 6 },
//     { name: 'ДАША', price: 400, quantity: 7 },
//     { name: 'ЗаРИНА', price: 1200, quantity: 12 },
// ];

// const boy = [
//     { name: 'паша', price: 1300, quantity: 5 },
//     { name: 'Костя', price: 2700, quantity: 6 },
//     { name: 'Дима', price: 400, quantity: 7 },
//     { name: 'Зидя', price: 1200, quantity: 12 },
// ];


// const getAllPropValues = function(massivu, keys) {
// let values =[];

//     for(const massiv of massivu){
//         console.log(massiv[keys]);
//         values.push(massiv[keys]);
//     }
//     return values
// };



// console.log( getAllPropValues(boy, 'name'));
// console.log( getAllPropValues(girls, 'price'));