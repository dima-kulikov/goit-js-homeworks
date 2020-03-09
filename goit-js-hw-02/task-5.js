const checkForSpam = function(message) {

 let string = message.toLowerCase()
console.log(string)

    // if (string.includes("spam")){
    //         return true
    // }
    // if (string.includes( "sale")){
    //         return true
    // }
    //  else{
    //         return false
    // }

    return string.includes("spam") || string.includes( "sale")
  };
  
 
  console.log(checkForSpam('Latest technology news spam')); 
  
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  
  console.log(checkForSpam('Get best sale offers now!')); 
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); 

  console.log(checkForSpam('JavaScript weekly SpAm newsletter'));
