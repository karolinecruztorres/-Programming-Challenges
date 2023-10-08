function anagram(firstWord, secondWord) {
  let first = firstWord.split("").sort().join("");
  let second = secondWord.split("").sort().join("");
  
  if (first === second) {
    console.log(`"${firstWord}" and "${secondWord}" are an anagram.`)
  } else {
    console.log(`"${firstWord}" and "${secondWord}" are not an anagram.`)
  }

}
anagram("live", "evil"); 