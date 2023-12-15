function palindrome(string) {
  let reverse = string.split("").reverse().join("").toLowerCase();

  if (string.toLowerCase() !== reverse) {
    return `${string} is not a palindrome.`;
  } 
  return `${string} is a palindrome.`;
}

console.log(palindrome("banana"));
console.log(palindrome("tenet"));