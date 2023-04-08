import { classify } from '../core/perfect-numbers';

describe('Perfect numbers', () => {
  it('Smallest perfect number is classified correctly', () => {
    const expected = 'perfect';
    expect(classify(6)).toEqual(expected);
  });
  it('Medium perfect number is classified correctly', () => {
    const expected = 'perfect';
    expect(classify(28)).toEqual(expected);
  });
  it('Large perfect number is classified correctly', () => {
    const expected = 'perfect';
    expect(classify(33550336)).toEqual(expected);
  });
});
describe('Abundant numbers', () => {
  it('Smallest abundant number is classified correctly', () => {
    const expected = 'abundant';
    expect(classify(12)).toEqual(expected);
  });
  it('Medium abundant number is classified correctly', () => {
    const expected = 'abundant';
    expect(classify(30)).toEqual(expected);
  });
  it('Large abundant number is classified correctly', () => {
    const expected = 'abundant';
    expect(classify(33550335)).toEqual(expected);
  });
});
describe('Deficient numbers', () => {
  it('Smallest prime deficient number is classified correctly', () => {
    const expected = 'deficient';
    expect(classify(2)).toEqual(expected);
  });
  xit('Smallest non-prime deficient number is classified correctly', () => {
    const expected = 'deficient';
    expect(classify(4)).toEqual(expected);
  });
  xit('Medium deficient number is classified correctly', () => {
    const expected = 'deficient';
    expect(classify(32)).toEqual(expected);
  });
  xit('Large deficient number is classified correctly', () => {
    const expected = 'deficient';
    expect(classify(33550337)).toEqual(expected);
  });
  xit('Edge case (no factors other than itself) is classified correctly', () => {
    const expected = 'deficient';
    expect(classify(1)).toEqual(expected);
  });
});
describe('Invalid inputs', () => {
  xit('Zero is rejected (not a natural number)', () => {
    expect(() => {
      classify(0);
    }).toThrowError('Classification is only possible for natural numbers.');
  });
  xit('Negative integer is rejected (not a natural number)', () => {
    expect(() => {
      classify(-1);
    }).toThrowError('Classification is only possible for natural numbers.');
  });
});