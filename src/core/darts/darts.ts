export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  if (distance > 10) return 0;
  if (distance > 5) return 1;
  return 10;
}
