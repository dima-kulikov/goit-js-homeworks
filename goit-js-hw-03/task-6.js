// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// for(let i=0; i < this.products.length; i+=1){
//   console.log(this.products[i])
//   };


const calculateTotalPrice = function(allProdcuts, productName) {
    for (const product of allProdcuts) {
        console.log(product.name);

        if( product.name === productName){

          return product.price*product.quantity
    }
};
};

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



console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Сканер')); 
console.log(calculateTotalPrice(products, 'Дроид')); // 2800