enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant',
  Deficient = 'deficient',
}

export function classify(num: number): string {
  if (num === 0) throw new Error('Classification is only possible for natural numbers.');
  let category = '';
  const suma = aliquotSum(num);
  if (suma === num) {
    category = Category.Perfect;
    return category;
  }
  if (suma > num) {
    category = Category.Abundant;
    return category;
  }
  if (suma < num) {
    category = Category.Deficient;
    return category;
  }
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
