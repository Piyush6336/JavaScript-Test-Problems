function generateConditionalOddSeries(a) {
    const result = [];
  
    const count = a % 2 === 0 ? a - 1 : a;
  
    for (let i = 0; i < count; i++) {
      result.push(2 * i + 1);
    }
  
    return result.join(', ');
  }
  console.log(generateConditionalOddSeries(1)); 
  console.log(generateConditionalOddSeries(2)); 
  console.log(generateConditionalOddSeries(3)); 
  console.log(generateConditionalOddSeries(4)); 
  console.log(generateConditionalOddSeries(5)); 
  console.log(generateConditionalOddSeries(6)); 
  