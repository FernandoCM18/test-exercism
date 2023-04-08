enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant',
  Deficient = 'deficient',
}

export function classify(num: number): Category {
  if (num === 0) throw new Error('Classification is only possible for natural numbers.');
  if (num < 0) throw new Error('Classification is only possible for natural numbers.');

  const suma = aliquotSum(num);
  if (suma === num) return Category.Perfect;
  if (suma > num) return Category.Abundant;
  return Category.Deficient;  
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
