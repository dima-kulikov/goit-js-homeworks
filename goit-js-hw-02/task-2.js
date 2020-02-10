const calculateEngravingPrice = function(message, pricePerWord) {
    let string = message.split(' ')
    console.log(string)
    let stringСount = string.length
    console.log(stringСount)
     
    return stringСount*pricePerWord
  };
  
 
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10,),
  ); 
  
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20,),
  ); 
  
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); 
  
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); 