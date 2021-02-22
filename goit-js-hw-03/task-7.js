// Задача 7.

// Пришла статистика газругок и надо выбрать те что больше 40%



const uploads = [
    {name:'rock', percentage: 8},
    {name:'house', percentage:15},
    {name:'hip-hop', percentage:34},
    {name:'rap', percentage:57},
    {name:'indy', percentage:61},
    {name:'techno', percentage:70}
];

// function findProcent(nameMassiv, procent){

// let ansver = nameMassiv.find(key => key.percentage > 20);
// let newuploads =[];
// console.log(ansver)
// newuploads.push(ansver);
// console.log(newuploads)
// return newuploads
// // return ansver 
// }


function findProcent(nameMassiv, procent){
    let newuploads =[];
for (const key of nameMassiv) {
console.log(key)

    if( key.percentage >= procent){
        
     newuploads.push(key);
    }
}
return newuploads
}


console.log(findProcent(uploads, 10));
console.log(findProcent(uploads, 45));
console.log(findProcent(uploads, 60));