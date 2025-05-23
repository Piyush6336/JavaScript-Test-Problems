function calculate(a, b, operation) {
    operation = operation.toLowerCase();
  
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Inputs a and b must be numbers';
    }
  
    switch (operation) {
      case 'addition':
        return a + b;
      case 'subtraction':
        return a - b;
      case 'multiplication':
        return a * b;
      case 'division':
        if (b === 0) {
          return 'Error: Division by zero';
        }
        return a / b;
      default:
        return 'Invalid operation';
    }
  }
  
  console.log('Addition:', calculate(10, 5, 'addition'));        
  console.log('Subtraction:', calculate(10, 5, 'subtraction'));  
  console.log('Multiplication:', calculate(10, 5, 'multiplication')); 
  console.log('Division:', calculate(10, 5, 'division'));        
  console.log('Invalid:', calculate(10, 5, 'modulus'));       
  