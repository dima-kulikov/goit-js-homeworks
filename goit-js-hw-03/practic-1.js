let a = 5;
let b = 10;


const product = {
    name: "Dima",
    description:"учеба js курсы онлайн.",
    price:30,
    say: () => {
       return (a + b)
    }
};
const key = 'price';
product.price = 50;
product.say();
product.say()

console.log(product.say())


console.log(product["description"])
console.log(product.price)
console.log(product)
delete product.name;
console.log(product)
// -----------------------------------------------------------------------
// const makeproduct = (name, prise, desc) =>{
//     return{
//         name:name,
//         price:prise,
//         desc:desc,
//     }
//     return{
//         name,
//         prise,
//         desc,
//         color: 'red',
//     }
// }


// console.log("dima", 50, "goit");
// console.log(makeproduct("dima", 50, "goit"))
// -----------------------------------------------------------------------
// 20 минута   https://www.youtube.com/watch?time_continue=1206&v=RU6l75P042A&feature=emb_logo


// const key = "name";
// const value = 10;

// const obj = {
//     a:1,
// };
// console.log(obj)

// obj[key] = value;
// obj["hui"] = '25 см'

// obj.loh = 'lopol '

// console.log(obj)










