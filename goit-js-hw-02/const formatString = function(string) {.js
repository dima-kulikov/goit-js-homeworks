const formatString = function(string) {
    const st = string.split('')
    console.log(st)
    const stu = string.length;
    // console.log(st)

    const Spl = st.splice(0,40);
    console.log(Spl)

    if (stu > 10){
    return  (Spl + " ...");
}
    else{
    return string
}

};

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
//   вернется оригинальная строка
  
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));


