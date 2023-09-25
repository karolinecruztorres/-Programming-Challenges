function guessLetter(){
let word = "apricot";
let word2 = "a";
const wordArray = word.split("");
let result = [];

  for (i = 0; i < wordArray.length; i++){
    if (word2 !== wordArray[i]){
      result.push("_");
    } else {
      result.push(word2);
    }
  }

  console.log(result);
 }

 guessLetter();