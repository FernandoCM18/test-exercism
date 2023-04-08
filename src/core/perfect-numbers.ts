enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant',
  Deficient = 'deficient',
}

export function classify(num: number): string {
  const suma = aliquotSum(num);

  if (suma === num) return Category.Perfect;
  return '';
}

function aliquotSum(num: number) {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  return suma;
}
