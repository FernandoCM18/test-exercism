

export function toRna(dna: string) {
  const rna = dna.split('').map((letter) => convert(letter)).join('');
  return rna;
}

const convert =  (letter: string) => {
  switch(letter) {
    case 'C' : return 'G';
    case 'G' : return 'C';
    case 'A' : return 'U';
    case 'T' : return 'A';
  }
}