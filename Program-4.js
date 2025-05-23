function countMultiples(arr) {
    const result = {};
  
    for (let i = 1; i <= 9; i++) {
      result[i] = 0;
    }
  
    for (let num of arr) {
      for (let i = 1; i <= 9; i++) {
        if (num % i === 0) {
          result[i]++;
        }
      }
    }
  
    return result;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
  

  console.log(countMultiples(numbers));
  
  