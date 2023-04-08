enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant',
  Deficient = 'deficient',
}

export function classify(num: number): string {
  const category = '';
  const suma = aliquotSum(num);
  if (suma === num) return Category.Perfect;
  if (suma > num) return Category.Abundant;
  if (suma < num) return Category.Deficient;
  return category;
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
