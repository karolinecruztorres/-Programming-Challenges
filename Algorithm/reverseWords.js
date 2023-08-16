function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

// Test cases
const sentence1 = "Hello World";
const sentence2 = "Coding is fun";
const sentence3 = "Challenge accepted";

console.log(reverseWords(sentence1));  // Should print "World Hello"
console.log(reverseWords(sentence2));  // Should print "fun is Coding"
console.log(reverseWords(sentence3));  // Should print "accepted Challenge"
