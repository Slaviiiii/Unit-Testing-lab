const { sum } = require('./sumOfNumbers');

describe('Test suit', () => {
  it('works with positive integers', () => {
    if (sum([3, 5]) != 8) {
      throw new Error('did not work with 3 and 5');
    }
  });

  it('works with floating point numbers', () => {
    if (sum([3.14, 2.71]) != 5.85) {
      throw new Error('did not work with 3 and 5');
    }
  });
})