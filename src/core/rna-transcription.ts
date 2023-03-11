export function toRna(nucleotides: string): string {
  if (nucleotides === 'C') return 'G';
  return nucleotides;
}
