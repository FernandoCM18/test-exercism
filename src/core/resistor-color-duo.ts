// Const bandColors = [
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

// export const decodedValue = ([first, last]: Array<string>) => {
//   const value = [first, last].reduce(
//     (prev, color) => prev + bandColors.indexOf(color), ''
//   );
//   return Number(value);
// }

const bandColors = new Map<string, number>();
bandColors.set('black', 0);
bandColors.set('brown', 1);
bandColors.set('red', 2);
bandColors.set('orange', 3);
bandColors.set('yellow', 4);
bandColors.set('green', 5);
bandColors.set('blue', 6);
bandColors.set('violet', 7);
bandColors.set('grey', 8);
bandColors.set('white', 9);

export const decodedValue = ([color1, color2]: string[]) => {
  const firstValue = bandColors.get(color1);
  const secondValue = bandColors.get(color2);
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const stringValue = `${firstValue}${secondValue}`;

  return Number(stringValue);
};
