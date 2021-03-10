// const shop = {
//     apple: 50,
// banana: 4,
// price:5,
// // priseoll(){
// //  return this.banana*this.price
// // },
// all(){
//     return this.apple*this.price
// }
// };

// console.log(shop.all())

// ---------------------СОЗДАНИЕ НОВОГО ОБЬЕКТА

// const Hhop = function(name, star, namber){
//     this.name = name;
//     this.star = star;
//     this.namber = namber;
// };

// const shopTwo = new Hhop ("lesia", 5, 10);
// console.log(shopTwo)

// const dima = new Hhop("Dima", 10, 32);
// console.log(dima)
// --------------------------СОЗДАНИЕ НОВЫХ ОБЬЕКТОВ С МЕТОДАМИ

// const Hotel = function (name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;
  
//     this.greet = function (guestName) {
//       console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//     };
//     this.addGuests = function (amount) {
//       this.guestCount += amount;
//     };
//     this.removeGuests = function (amount) {
//       this.guestCount -= amount;
//     };
//   };
  
//   const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
//   console.log(hotel);
//   hotel.greet('Mango');
//   hotel.addGuests(50);
//   console.log(Hotel.addGuests(50))
//   hotel.removeGuests(50);

// -----------------СОЗДАНИЕ МЕНЕДЖЕРА ЧЕРЕЗ КОНСТРУКТОР

// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;
  
//     this.sell = function (product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     };
//   };
  
//   const mango = new Manager('Mango', 5);
//   console.log(mango.sales); 
//   console.log(mango.sell('TV'));
//   console.log(mango.sell('Microwave'));
//     console.log(mango.sales); 
  
//   const poly = new Manager('Poly', 10);
//   console.log(poly.sales); 
//   console.log(poly.sell('TV')); 
//   console.log(poly.sell('Microwave')); 
//   console.log(poly.sales); 

// -------------------------------

