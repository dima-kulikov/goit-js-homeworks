// 8.
// Есть два массива name и prise. Сделать из них один массив который будет иметь обьекты name и prise.


// const names = [`бананы`, `яблоки`, `груши`, `черешня`, `вишня`];
// const prices = [100, 200, 300, 400, 500];



// const combine = function (name, price){
// const combined =[];
// for ( let i = 0; i < names.length; i+=1){
//     console.log(names[i]);
//     console.log(prices[i])
//     const obj = {
//         name:names[i],
//         price:prices[i]
//     };
//     console.log(obj)
//     combined.push(obj);
// }
// return combined;
// };

// const products = combine(names, prices);
// console.log(products)
// console.table(products)




const names = [`бананы`, `яблоки`, `груши`, `черешня`, `вишня`];
const prices = [100, 200, 300, 400, 500];



const combine = function (name, price){
const combined =[];
for ( let i = 0; i < names.length; i+=1){
    console.log(names[i]);
    console.log(prices[i])
    console.log(`${names[i]}: ${prices[i]}`)
    // const obj = {
        // const key = names[i];
        // const value = prices[i];
        // (`${names[i]}: ${prices[i]}`)
    // };

    console.log(obj)
    combined.push(obj);
}
return combined;
};

const products = combine(names, prices);
console.log(products)
console.table(products)