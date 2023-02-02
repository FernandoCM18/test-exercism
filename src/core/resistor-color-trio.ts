const bandColors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

const KILO = 1000;

export function decodedResistorValue([first, second, last]: Array<string>): string {
  const value = [first, second].reduce((prev, color) => prev + bandColors.indexOf(color),'');
  const totalZeros = bandColors.indexOf(last);
  const result = Number(value + '0'.repeat(totalZeros));

  if(result >= KILO) {
    return (result / KILO) + ' kiloohms';
  }
  
  return `${result} ohms`;
}