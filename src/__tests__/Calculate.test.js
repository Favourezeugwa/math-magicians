import calculate from '../Logic/calculate';

describe('Tests on calculator.js calculate function', () => {
  test('Test AC button on calculator', () => {
    const result = calculate({ total: '777', next: '75', operation: '' }, 'AC');
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Test = button on calculator', () => {
    const result = calculate({ total: '1000', next: '75', operation: 'x' }, '=');
    expect(result).toStrictEqual({ total: '75000', next: null, operation: null });
  });

  test('Test +/- button on calculator', () => {
    const result = calculate({ total: -12, next: null, operation: null }, '+/-');
    expect(result).toStrictEqual({ total: '12', next: null, operation: null });
  });

  test('Test dot button on calculator', () => {
    let result = calculate({ total: null, next: null, operation: null }, '5');
    result = calculate(result, '.');
    result = calculate(result, '100');
    expect(result).toStrictEqual({ total: null, next: '5.100' });
  });

  test('Test - button on calculator', () => {
    const result = calculate({ total: '1000', next: '1200', operation: '-' }, 'x');
    expect(result).toStrictEqual({ total: '-200', next: null, operation: 'x' });
  });

  test('Test + button on calculator', () => {
    const result = calculate({ total: '1000', next: '1200', operation: '-' }, '+');
    expect(result).toStrictEqual({ total: '-200', next: null, operation: '+' });
  });

  test('Test ÷ button on calculator', () => {
    const result = calculate({ total: '1200', next: '1200', operation: '÷' }, '=');
    expect(result).toStrictEqual({ total: '1', next: null, operation: null });
  });

  test('Test % button on calculator', () => {
    const result = calculate({ total: null, next: '1200', operation: null }, '%');
    expect(result).toStrictEqual({ total: '1200', next: null, operation: '%' });
  });
});
