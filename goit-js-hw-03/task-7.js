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

// ---------------------------while----------------

// function findProcent(nameMassiv, procent){
// let newuploads =[];
// for (const key of nameMassiv)  {
//     console.log(key)
//     while(key.percentage > procent) {
//         newuploads.push(key);
//       break;  
//     };
// };
// return newuploads
// };

// console.log(findProcent(uploads, 10));
// console.log(findProcent(uploads, 45));
// console.log(findProcent(uploads, 60));

// -----------------------do-----while----------------------------------
// function findProcent(nameMassiv, procent){
//     let newuploads =[];
//     for (const key of nameMassiv) {
//         console.log(key)
//         console.log(key.percentage)
//         do{
//             newuploads.push(key);
//         }
//         while(key > procent) 
//     }
//     return newuploads
// }

// console.log(findProcent(uploads, 10));
// console.log(findProcent(uploads, 45));
// console.log(findProcent(uploads, 60));


// -----------------for----of---------------------------
// function findProcent(nameMassiv, procent){
//     let newuploads =[];
// for (const key of nameMassiv) {
// console.log(key)

//     if( key.percentage >= procent){
        
//      newuploads.push(key);
//     }
// }
// return newuploads
// }

// console.log(findProcent(uploads, 10));
// console.log(findProcent(uploads, 45));
// console.log(findProcent(uploads, 60));