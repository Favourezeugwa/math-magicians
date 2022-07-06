import operate from '../logic/operate';

describe('Tests on operate.js arithmetic operations ', () => {
  test('Test multiply 20 * 30 to get 600', () => {
    const product = operate(20, 30, 'x');
    expect(product).toBe('600');
  });

  test('Test subtract 100 - 30 to get 70', () => {
    const subtraction = operate(100, 30, '-');
    expect(subtraction).toBe('70');
  });

  test('Test Add 100 + 30 to get 130', () => {
    const Addition = operate(100, 30, '+');
    expect(Addition).toBe('130');
  });

  test('Test divide 20 ÷ 2 to get 10', () => {
    const division = operate(20, 2, '÷');
    expect(division).toEqual('10');
  });

  test('Test remainder 25 % 2 to get 3', () => {
    const modulo = operate(25, 2, '%');
    expect(modulo).toEqual('1');
  });
});
