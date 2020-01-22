const total = 100;
let ordered = 30

const isInRange = total < ordered;

if(isInRange){
    console.log(`На складе недостаточно твоаров!`);   
}
if(!isInRange){
    console.log(`Заказ оформлен, с вами свяжется менеджер`);   
}