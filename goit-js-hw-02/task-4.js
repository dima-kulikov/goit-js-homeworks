const formatString = function(string) {
  const Len = string.length;
  console.log(Len)
  const Number = 40;


  if( Len <= Number){
      return (string);
  }
  else {    
      return (string.substring(0, Number) + " ...");
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// const formatString = function(string) {
//     const st = string.split('')
//     console.log(st)
//     const stu = string.length;
//     // console.log(st)
//     console.log(string)

//     const Spl = st.splice(0,40);
//     console.log(Spl)
//     const mas = Spl.toString();
//     console.log(mas)
//     if (stu > 10){
//     return  (Spl + " ...");
// }
//     else{
//     return string
// }

// };

//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// //   вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// //   вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
// //   вернется оригинальная строка
  
//   console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));


