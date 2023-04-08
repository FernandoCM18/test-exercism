export function compute(left: string, right: string): number {
  let counter = 0;
  for(let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) counter++;
  }
  
  return counter;
}
