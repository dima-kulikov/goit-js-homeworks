

// const findLongestWord = function(string){
//   const words = string.split(" ");
//   console.log(words);
//   let longWord = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longWord.length) {
//       longWord = words[i]
//     }
//   }
//   return longWord
// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

// console.log(findLongestWord('Google do a roll')); 

// console.log(findLongestWord('May the force be with you')); 


const findLongestWord = function(string){
  const words = string.split(" ");
  console.log(words);
  let longWord = words[0];
  
  for( const word of words ){
      if( word.length > longWord.length){
          longWord = word;
          
      }
      
  }
  return longWord
  }
  
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  console.log(findLongestWord('Google do a roll')); 
  
  console.log(findLongestWord('May the force be with you')); 

