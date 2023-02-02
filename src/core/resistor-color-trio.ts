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

export function decodedResistorValue([first, second, last]: Array<string>): string {
  const value = [first, second].reduce((prev, color) => prev + bandColors.indexOf(color),'');
  const totalZeros = bandColors.indexOf(last);
  const result = value + '0'.repeat(totalZeros);

  if(Number(result) >= 1000) {
    return (Number(result) / 1000) + ' kiloohms';
  }
  
  return result + ' ohms';
}