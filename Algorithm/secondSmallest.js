function findSecondSmallest(parametro) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < parametro.length; i++) {
      if (parametro[i] < smallest) {
        secondSmallest = smallest;
        smallest = parametro[i];
      } else if (parametro[i] < secondSmallest && parametro[i] !== smallest) {
        secondSmallest = parametro[i];
      }
    }
    return secondSmallest;
  }
  
  const array = [7, 2, 0, 5, 3, 1];
  console.log(findSecondSmallest(array)); 
  