import { colorCode, COLORS } from '../core/resistor-color'

xdescribe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  });

  it('White', () => {
    expect(colorCode('white')).toEqual(9)
  });

  it('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  });

});

xdescribe('Colors', () => {

  it('returns all colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });

});