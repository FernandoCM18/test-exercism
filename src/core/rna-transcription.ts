export function toRna(nucleotides: string): string {
  if (nucleotides === 'C') return 'G';
  if (nucleotides === 'G') return 'C';
  return nucleotides;
}
