function tripleSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === target) {
          console.log(`${array[i]} + ${array[j]} + ${array[k]} = ${array[i] + array[j] + array[k]}`);
        }
      }      
    }    
  }
}

tripleSum([1,2,3,4,5,6,7,8,9,10], 10);