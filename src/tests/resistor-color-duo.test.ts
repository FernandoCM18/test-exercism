import { decodedValue } from '../core/resistor-color-duo';

xdescribe('Resistor color', () => {
  it('brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10);
  });
  it('blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68);
  });
  it('yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47);
  });
  it('orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33);
  });
  it('ignore additional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51);
  });
});