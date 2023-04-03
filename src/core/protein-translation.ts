const CODON_PROTEIN: Map<string, string> = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'],
  ['UAG', 'STOP'],
  ['UGA', 'STOP'],
]);

export function translate(rna: string): string[] {
  const result: string[] = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substring(i, i + 3);
    const protein = CODON_PROTEIN.get(codon);
    if (protein === undefined) {
      throw new Error('Invalid codon: ' + codon);
    }
    if (protein === 'STOP') {
      break;
    }
    result.push(protein);
  }

  return result;
}
