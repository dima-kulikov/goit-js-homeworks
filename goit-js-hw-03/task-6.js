// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// -------- ВАРИАН 1 ----------
// const myWork = function(allProdcuts, productName) {
//     for (const product of allProdcuts) {
//         console.log(product.name);
//         if( product.name === productName){
//           return product.price*product.quantity
//     }
// };
// };
// -------- ВАРИАН 2 ---------- 
const myWork = function(masiv, name){
 let ansver = masiv.find(myName => myName.name === name);
 console.log(ansver)
 return (ansver.price*ansver.quantity);
}


console.log(myWork(products, 'Радар')); // 5200
console.log(myWork(products, 'Сканер')); 
console.log(myWork(products, 'Дроид')); // 2800




// productName = function findCherries(nameinObj) {
// let myName = nameinObj.name;
// if( nameinObj.name === 'Радар'){
//  let pp = products.price*products.quantity
//  console.log(nameinObj.name);
//  console.log(pp)
//  return pp
// }
//   console.log(nameinObj.name)
// }
// console.log(products.find(productName));