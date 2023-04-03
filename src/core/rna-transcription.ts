const convertLetter = (letter: string) => {
  switch (letter) {
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    case 'A':
      return 'U';
    case 'T':
      return 'A';
  }

  throw Error('Invalid input DNA.');
};

export function toRna(dna: string) {
  const rna = dna
    .split('')
    .map((letter) => convertLetter(letter))
    .join('');
  return rna;
}
