// const bandColors = [
//   "black",
//   "brown",
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "violet",
//   "grey",
//   "white"
// ];

// const KILO = 1000;

// export function decodedResistorValue([first, second, last]: Array<string>): string {
//   const value = [first, second].reduce((prev, color) => prev + bandColors.indexOf(color),'');
//   const totalZeros = bandColors.indexOf(last);
//   const result = Number(value + '0'.repeat(totalZeros));

//   if(result >= KILO) {
//     return (result / KILO) + ' kiloohms';
//   }
  
//   return `${result} ohms`;
// };


const bandColors = new Map<string, number>();
bandColors.set('black', 0);
bandColors.set('brown', 1);
bandColors.set('red',2);
bandColors.set('orange',3);
bandColors.set('yellow',4);
bandColors.set('green',5);
bandColors.set('blue',6);
bandColors.set('violet',7);
bandColors.set('grey',8);
bandColors.set('white',9);

enum Unit {
  OHMS = 'ohms',
  KILOOHMS = 'kiloohms',
  MEGAOHMS = 'megaohms',
  GIGAOHMS = 'gigaohms'
}

enum UnitValue {
  OHM = 1,
  KILOOHMS = 1000,
  MEGAOHMS = 1000000,
  GIGAOHMS = 1000000000
}

export const decodedResistorValue = ([color1, color2, color3]: Array<string>): string => {

  const firstValue = bandColors.get(color1);
  const secondValue = bandColors.get(color2);
  const totalZeros = bandColors.get(color3) || 0;
  const result = Number(`${firstValue}${secondValue}${'0'.repeat(totalZeros)}`);  
  
  if(result >= UnitValue.GIGAOHMS ) {
    const resultGiga = (result / UnitValue.GIGAOHMS);    
    return `${resultGiga} ${Unit.GIGAOHMS}`
  }

  if(result >= UnitValue.MEGAOHMS ) {
    const resultMega = (result / UnitValue.MEGAOHMS);  
    return `${resultMega} ${Unit.MEGAOHMS}`
  }

  if(result >= UnitValue.KILOOHMS) {
    const resultKilo = (result / UnitValue.KILOOHMS);    
    return `${resultKilo} ${Unit.KILOOHMS}`
  }

  return `${result} ${Unit.OHMS}`;

}
