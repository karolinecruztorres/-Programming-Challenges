//Encontre o segundo menor valor numérico de uma array
function findSecondSmallest(parameter) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < parameter.length; i++) {
      if (parameter[i] < smallest) {
        secondSmallest = smallest;
        smallest = parameter[i];
      } else if (parameter[i] < secondSmallest && parameter[i] !== smallest) {
        secondSmallest = parameter[i];
      }
    }
    return secondSmallest;
  }
  
  const array = [7, 2, 0, 5, 3, 1];
  console.log(findSecondSmallest(array)); 
