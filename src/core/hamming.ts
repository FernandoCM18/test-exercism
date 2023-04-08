export function compute(left: string, right: string): number {
  if (left.length === 0 && right.length === 0 || left === right) return 0;  
  if (left !== right) return 1;
  return 0;
}
